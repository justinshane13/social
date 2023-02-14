import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import Workouts from '../components/Workouts'


const Home = () => {
    const {dispatch} = usePostsContext()
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

    const changeTopic = async (newTopic) => {
        setTopic(newTopic)

        const response = await fetch(`/api/posts/${newTopic.toLowerCase()}`)
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_POSTS', payload: json})
        }
    }

    return (
        <div className="homepage">
            <Navbar />
            <Sidebar topic={topic} changeTopic={changeTopic}/>
            <div className='posts-and-workouts-container'>
                <Posts topic={topic} />
                <Workouts/>
            </div>
        </div>
    )
}

export default Home