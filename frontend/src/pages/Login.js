import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <h3 className="login-title">Login to Soci<span className="blue">A</span><span className="red">L</span><span className="green">L</span></h3>
                <input 
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Username"
                />
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login