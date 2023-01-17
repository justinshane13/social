import { useEffect, useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

const Home = () => {
    const {posts, dispatch} = usePostsContext()
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