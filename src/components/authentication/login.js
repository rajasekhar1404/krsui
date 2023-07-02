import { useState } from "react"
import { ToastContainer } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import { loginHandler } from "../apis/userRequests"

const Login = ({ setSignup, setActive }) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleLogin = async () => {
        if (await loginHandler(user)) {
            setActive(true)
        }
    }

    return (
        <section>
                <div className="login-container">
                    <img className="logoContainer" src={HomeLogo} alt="KRS" />
                    <input placeholder="Enter you username" onChange={(e) => setUser({...user, username: e.target.value})} required/>
                    <input placeholder="Enter you password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} required/>
                    <button onClick={handleLogin}>Login</button>
                    <p>Still not registered yet? <label onClick={() => setSignup(true)} style={{color: 'blue',cursor: "pointer"}}>Register now</label></p>
                </div>
            <ToastContainer />
        </section>
    )
}

export default Login