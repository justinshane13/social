import { useState } from 'react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { usePostsContext } from '../hooks/usePostsContext'

const Posts = ({ topic }) => {
    const { posts } = usePostsContext()
    const { user } = useAuthContext()
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="posts">
            <div className="topic-form-container">
                <div className="topic-container">
                    <div onClick={() => setIsOpen(!isOpen)} className="topic-trigger">
                        <img src={`/images/${topic}.png`} className="topic-icon" alt='topic icon'/>
                        <h2>{topic}</h2>
                    </div>
                    <div className={`topic-list ${isOpen ? 'open' : 'closed'}`}>
                        <Topic />
                        <Topic />
                        <Topic />
                        <Topic />
                    </div>
                </div>
                {user && <PostForm topic={topic} />}
            </div>
            {posts && posts.map(post => (
                <Post key={post._id} post={post} topic={topic} />
            ))}
        </div>
    )
}

const Topic = () => {
    return (
        <li className="topic-item">
            <div><img src="/images/Career.png" className="sidebar-icon" alt="topic icon"/>Career</div>
        </li>
    )
}

export default Posts