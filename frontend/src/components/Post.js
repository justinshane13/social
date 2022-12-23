// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Post = ({post}) => {
    console.log(post)
    return (
        <div className="post">
            <img className="profile-image" src="/images/IMG_2040.jpg" alt="profile" />
            <div className="post-content-container">
                <p className="author">{post.author}</p>
                <p className="title">{post.title}</p>
                <p className="content">{post.content}</p>
                <p>{formatDistanceToNow(new Date(post.createdAt))}</p>
            </div>
        </div>
    )
}

export default Post