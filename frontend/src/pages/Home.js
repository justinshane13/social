import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/posts')
            console.log(response)
            const json = await response.json()
            
            if (!response.ok) {
                console.log(response)
            }
            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

    console.log(posts)

    return (
        <div className="homepage">
            <Sidebar />
            <div className="main">
                <h1>Navbar goes here</h1>
                <PostForm />
                {posts && posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Home