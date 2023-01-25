import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <h3 className="login-title">Login to <span className="blue">SO</span><span className="red">CI</span><span className="green">AL</span></h3>
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
                <button>Login</button>
                <div className='signup-cta'>New to SOCIAL? Create an account.</div>
                <Link to="/signup" className="signup-cta-button">Sign up</Link>
            </form>
        </div>
    )
}

export default Login