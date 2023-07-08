import { useState } from "react"
import { REGISTER } from "../apis/taskApis"
import { CREATED } from "../utils/constants"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import { registerUser } from "../apis/userRequests"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        isPublic: false
    })

    const navigator = useNavigate()

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const registerHandler = async () => {

        const response = await registerUser(user)            
        if (response) {
            navigator("/login")
        } else {
            toast.error('Unable to register the user', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    return (
        <div>
            <div className="login-container">
                <img className="logoContainer" src={HomeLogo} alt="KRS"/>
                <input placeholder="Enter your fullname" name="fullname" onChange={changeHandler} required/>
                <input placeholder="Enter your email" type="email" name="email" onChange={changeHandler} required/>
                <input placeholder="Enter your password" type="password" name="password" onChange={changeHandler} required/>
                <button onClick={registerHandler}>Register</button>
                <p>Already registered? <Link to={"/login"} style={{color: 'blue',cursor: "pointer"}}>Login here</Link></p>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup