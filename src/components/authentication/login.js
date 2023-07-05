import { useState } from "react"
import { ToastContainer } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import { loginHandler, sendForgotPasswordCode } from "../apis/userRequests"
import BACK_LOGO from '../../static/go_back.png'

const Login = ({ setSignup, setLogin, setActive }) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        if (await loginHandler(user)) {
            setActive(true)
        }
    }

    const sendEmail = () => {
        if (user.email) {
            sendForgotPasswordCode(user.email)
        }
    }

    return (
        <section>
            <img src={BACK_LOGO} alt="back" className="go-back" onClick={() =>{
                    setLogin(false)
                    setSignup(false)
                }}/>
                <div className="login-container">
                    <img className="logoContainer" src={HomeLogo} alt="KRS" />
                    <input placeholder="Enter you email" type="email" onChange={(e) => setUser({...user, email: e.target.value})} required/>
                    <input placeholder="Enter you password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} required/>
                    <button onClick={handleLogin}>Login</button>
                    <p style={{color: 'blue',cursor: "pointer"}} onClick={sendEmail}>Forgot password</p>
                    <p>Still not registered yet? <label onClick={() => setSignup(true)} style={{color: 'blue',cursor: "pointer"}}>Register now</label></p>
                </div>
            <ToastContainer />
        </section>
    )
}

export default Login