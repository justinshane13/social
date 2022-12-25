import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

const Home = () => {
    const [posts, setPosts] = useState(null)
    const [topic, setTopic] = useState("General")

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/posts')
            const json = await response.json()
            
            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

    const changeTopic = async (newTopic) => {
        setTopic(newTopic)

        const response = await fetch(`/posts/${newTopic.toLowerCase()}`)
        const json = await response.json()

        if (response.ok) {
            setPosts(json)
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