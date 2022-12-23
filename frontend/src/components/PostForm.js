import { useState } from 'react'

const PostForm = () => {
    const [content, setContent] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {
            content: content,
            author: "anonymous"
        }

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
            setContent('')
            console.log('new post added!')
        }

        setIsActive(false)
    }

    return (
        <div className="form-container">
            {!isActive && <button onClick={() => setIsActive(true)}>Add a new post</button>}
            {isActive && 
                <div className="form-flexbox">
                    <img src="/images/IMG_2040.jpg" alt="profile" className="profile-image-form"/>
                    <form>
                        <textarea 
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Share your thoughts"
                        className="input-content"
                        />
                        <button className="input-button" type="submit" onClick={handleSubmit}>Post</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default PostForm