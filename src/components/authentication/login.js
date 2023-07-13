import { useState } from "react"
import { ToastContainer } from "react-toastify"
import HomeLogo from '../../static/CentralHub_black_logo_500_500.png'
import { loginHandler } from "../apis/userRequests"
import ForgotPassword from "./forgotPassword"
import { Link, useNavigate } from "react-router-dom"

const Login = ({ setActive }) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const [forgotPassword, setForgotPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        if (await loginHandler(user)) {
            setActive(true)
            navigate("/")
        }
    }

    return (
        <section>
            
            {
                forgotPassword ? <ForgotPassword setForgotPassword={setForgotPassword}/> : <>
                    <div className="login-container">
                        <form>
                        <img className="logoContainer" src={HomeLogo} alt="KRS" />
                        <input placeholder="Enter you email" type="email" onChange={(e) => setUser({...user, email: e.target.value})} required/>
                        <input placeholder="Enter you password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} required/>
                        <button onClick={handleLogin}>Login</button>
                        <p style={{color: 'blue',cursor: "pointer"}} onClick={() => setForgotPassword(!forgotPassword)}>Forgot password</p>
                        <p>Still not registered yet? <Link to={"/signup"} style={{color: 'blue',cursor: "pointer"}}>Register now</Link></p>
                        </form>
                    </div>
                </>
        }
            
            <ToastContainer />
        </section>
    )
}

export default Login