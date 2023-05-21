import { useState } from "react"
import Signup from "./signup"
import { LOGIN } from "../apis/taskApis"
import { OK } from "../utils/constants"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'

const Login = ({ setActive }) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [signup, setSignup] = useState(false)

    async function loginHandler () {
        try {
            const response = await fetch(LOGIN, {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (response.status !== OK) {
                toast.error('Invalid credentials', {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            } else {
                const data = await response.json()
                validateUser(data)
            }         
        } catch (err) {
            toast.error('Invalid credentials', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    function validateUser(data) {
        localStorage.setItem('key', data.key)
        setActive(true)
    }

    return (
        <section>
            {
                signup ? <div>
                    <Signup signup={signup} setSignup={setSignup} />
                </div> : <div className="login-container">
                    <img className="logoContainer" src={HomeLogo} alt="KRS" />
                    <input placeholder="Enter you username" onChange={(e) => setUser({...user, username: e.target.value})} required/>
                    <input placeholder="Enter you password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} required/>
                    <button onClick={loginHandler}>Login</button>
                    <p>Still not registered yet? <label onClick={() => setSignup(!signup)} style={{color: 'blue',cursor: "pointer"}}>Register now</label></p>
                </div>
            }
            <ToastContainer />
        </section>
    )
}

export default Login