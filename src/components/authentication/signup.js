import { useState } from "react"
import { REGISTER } from "../apis/taskApis"
import { CREATED } from "../utils/constants"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
    
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        isPublic: false
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })        
    }

    const registerHandler = async () => {

        try {
            const response = await fetch(REGISTER, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (response.status !== CREATED) {
                let message;
                const error = await response.json()
                error.message.includes('duplicate') ? message = 'user already registered, please login' : message = error.message
                toast.error(message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            } else {
                    toast.success('Registered successfully, please login to continue', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    navigate("/login")
            }


        } catch(err) {
            toast.error(err.message, {
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