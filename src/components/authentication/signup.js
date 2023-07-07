import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import BACK_LOGO from '../../static/go_back.png'
import { registerUser } from "../apis/userRequests"

const Signup = ({ setSignup, setLogin }) => {
    
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        isPublic: false
    })

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const registerHandler = async () => {

        const response = await registerUser(user)            
        if (response) {
            setSignup(false)
        } else {
            toast.error('Unable to register the user', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    return (
        <div>
            <img src={BACK_LOGO} alt="back" className="go-back" onClick={() => setSignup(false)}/>
                <div className="login-container">
                    <img className="logoContainer" src={HomeLogo} alt="KRS"/>
                    <input placeholder="Enter your fullname" name="fullname" onChange={changeHandler} required/>
                    <input placeholder="Enter your email" type="email" name="email" onChange={changeHandler} required/>
                    <input placeholder="Enter your password" type="password" name="password" onChange={changeHandler} required/>
                    <button onClick={registerHandler}>Register</button>
                    <p>Already registered? <label onClick={() => {
                        setSignup(false)
                        setLogin(true)
                    }} style={{color: 'blue',cursor: "pointer"}}>Login here</label></p>
                    <ToastContainer />
                </div>
        </div>
    )
}

export default Signup