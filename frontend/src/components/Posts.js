import Post from '../components/Post'
import PostForm from '../components/PostForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePostsContext } from '../hooks/usePostsContext'

const Posts = ({ topic }) => {
    const { posts } = usePostsContext()
    const { user } = useAuthContext()
    
    return (
        <div className="main">
            <div className="topic-form-container">
                <div className="topic-container">
                    <img src={`/images/${topic}.png`} className="topic-icon" alt='topic icon'/>
                    <h2>{topic}</h2>
                </div>
                {user && <PostForm topic={topic} />}
            </div>
            {posts && posts.map(post => (
                <Post key={post._id} post={post} topic={topic} />
            ))}
        </div>
    )
}

export default Posts