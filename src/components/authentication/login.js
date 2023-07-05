import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import { loginHandler, sendForgotPasswordCode } from "../apis/userRequests"
import BACK_LOGO from '../../static/go_back.png'
import ForgotPassword from "./forgotPassword"

const Login = ({ setSignup, setLogin, setActive }) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [forgotPassword, setForgotPassword] = useState(false)

    const handleLogin = async () => {
        if (await loginHandler(user)) {
            setActive(true)
        }
    }

    const sendEmail = () => {
        if (user.email) {
            sendForgotPasswordCode(user.email)
        } else {
            toast.error('Email id is required', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    return (
        <section>
            
            {
                forgotPassword ? <ForgotPassword setForgotPassword={setForgotPassword}/> : <>
                    <img src={BACK_LOGO} alt="back" className="go-back" onClick={() =>{
                        setLogin(false)
                        setSignup(false)
                    }}/>
                    <div className="login-container">
                        <form>
                        <img className="logoContainer" src={HomeLogo} alt="KRS" />
                        <input placeholder="Enter you email" type="email" onChange={(e) => setUser({...user, email: e.target.value})} required/>
                        <input placeholder="Enter you password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} required/>
                        <button onClick={handleLogin}>Login</button>
                        <p style={{color: 'blue',cursor: "pointer"}} onClick={() => setForgotPassword(!forgotPassword)}>Forgot password</p>
                        <p>Still not registered yet? <label onClick={() => setSignup(true)} style={{color: 'blue',cursor: "pointer"}}>Register now</label></p>
                        </form>
                    </div>
                </>
        }
            
            <ToastContainer />
        </section>
    )
}

export default Login