import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import Workouts from '../components/Workouts'


const Home = () => {
    const {dispatch} = usePostsContext()
    const {user} = useAuthContext()
    const {logout} = useLogout()
    const [topic, setTopic] = useState("General")

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json()
            
            if (response.ok) {
                dispatch({type: 'SET_POSTS', payload: json})
            }
        }

        fetchPosts()
    }, [dispatch])

    useEffect(() => {
        const getNews = async () => {
            const response = await fetch('https://api.api-ninjas.com/v1/exercises?muscle=triceps', {
                headers: {
                    'X-Api-Key': 'XUtO/JDl/QIg9GhjDco20A==cweHWrRYahHAL3Kv'
                }
            })
            const json = await response.json()
            console.log(json)
        }

        getNews()
    }, [])

    const changeTopic = async (newTopic) => {
        setTopic(newTopic)

        const response = await fetch(`/api/posts/${newTopic.toLowerCase()}`)
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_POSTS', payload: json})
        }
    }

    const handleClick = () => {
        logout()
    }

    return (
        <div className="homepage">
            {user && (
                <div className='logout-container'>
                    <p className='logged-username'>{user.username}</p>
                    <button className='logout-button' onClick={handleClick}>Log out</button>
                </div>
            )}
            {!user && (
                <div className='login-signup-buttons'>
                    <Link to="/login" className="login-button">Log in</Link>
                    <Link to="/signup" className="signup-button">Sign up</Link>
                </div>
            )}
            <Sidebar topic={topic} changeTopic={changeTopic}/>
            <div className='posts-and-workouts-container'>
                <Posts topic={topic} />
                <Workouts />
            </div>
        </div>
    )
}

export default Home