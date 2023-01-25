import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(username, password)

        await signup(username, password)
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <h3 className="login-title">Sign up for <span className="blue">SO</span><span className="red">CI</span><span className="green">AL</span></h3>
                <input 
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                />
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                />
                <button>Sign Up</button>
                <div className='signup-cta'>Already have an account? <Link to="/login">Log in.</Link></div>
            </form>
        </div>
    )
}

export default Signup