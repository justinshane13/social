import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'

const PostForm = ({topic}) => {
    const {posts, dispatch} = usePostsContext()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {
            title: title,
            content: content,
            author: "anonymous",
            topic: topic.toLowerCase()
        }

        console.log(post)

        const response = await fetch('/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.EmptyFields)
        }
        if (response.ok) {
            setError(null)
            setEmptyFields([])
            setTitle('')
            setContent('')
            console.log('new post added!')
            dispatch({type: 'ADD_POST', payload: json})
            console.log(posts)
        }

        setIsActive(false)
    }

    return (
        <div className="form-container">
            {!isActive && <button onClick={() => setIsActive(true)} className="input-button">Add a new post</button>}
            {isActive && 
                <div className="form-flexbox">
                    <img src="/images/IMG_2040.jpg" alt="profile" className="profile-image-form"/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Post title"
                            className="input-title"
                        />
                        <textarea 
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Share your thoughts"
                        className="input-content"
                        maxLength={300}
                        />
                        <button className="input-button">Post</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default PostForm