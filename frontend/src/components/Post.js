// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Post = ({post, topic}) => {
    return (
        <div className="post">
            <img className="profile-image" src="/images/IMG_2040.jpg" alt="profile" />
            <div className="post-content-container">
                <div className="post-top-row">
                    <p className="author">{post.author}</p>
                    <button>Delete</button>
                </div>
                <p className="title">{post.title}</p>
                <p className="content">{post.content}</p>
                <p className="date">{formatDistanceToNow(new Date(post.createdAt))} ago in {post.topic}</p>
            </div>
        </div>
    )
}

export default Post