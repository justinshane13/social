import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

const Home = () => {
    const {posts, dispatch} = usePostsContext()
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
                <div className='logout-button'>
                    <span>{user.username}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
            {!user && (
                <div className='login-signup-buttons'>
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            )}
            <Sidebar topic={topic} changeTopic={changeTopic}/>
            <div className="main">
                <h2>{topic} —</h2>
                <PostForm topic={topic} />
                {posts && posts.map(post => (
                    <Post key={post._id} post={post} topic={topic} />
                ))}
            </div>
        </div>
    )
}

export default Home