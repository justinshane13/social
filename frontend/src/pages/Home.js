import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import Workouts from '../components/Workouts'


const Home = () => {
    const {dispatch} = usePostsContext()
    const [topic, setTopic] = useState("General")
    const [isOpen, setIsOpen] = useState(false)

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

        setIsOpen(!isOpen)
    }

    return (
        <div className="homepage">
            <Navbar />
            <div className='posts-and-workouts-container'>
                <Posts topic={topic} changeTopic={changeTopic} isOpen={isOpen} setIsOpen={setIsOpen} />
                <Workouts/>
            </div>
        </div>
    )
}

export default Home