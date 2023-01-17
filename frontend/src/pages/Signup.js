import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
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
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup