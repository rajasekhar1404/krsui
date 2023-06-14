import { useState } from "react"
import { REGISTER } from "../apis/taskApis"
import { OK } from "../utils/constants"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import UpdateDashboard from "../dashboard/updateDashBoard"

const Signup = ({ setSignup, setLogin }) => {
    
    const [portfolioVisibility, setPortfolioVisibility] = useState(false)
    const [portfolioRequired, setPortfolioRequired] = useState(false)

    const [user, setUser] = useState({
        userid: "",
        fullname: "",
        username: "",
        password: ""
    })

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
            if (response.status !== OK) {
                let message;
                const error = await response.json()
                error.message.includes('duplicate') ? message = 'user already registered, please login' : message = error.message
                toast.error(message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            } else {
                    setUser({
                        ...user,
                        userid: await response.json()
                    })
                    setPortfolioVisibility(!portfolioVisibility)
            }


        } catch(err) {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    const skipHandler = () => {
        setPortfolioVisibility(!portfolioVisibility)
        setSignup(false)
        setLogin(true)
    }

    const setUpPortfolio = () => {
        setPortfolioVisibility(!portfolioVisibility)
        setPortfolioRequired(!portfolioRequired)
    }

    return (
        <div>
            {

                portfolioRequired ? <UpdateDashboard userid={user.userid} /> : <div className="login-container">
                    <img className="logoContainer" src={HomeLogo} alt="KRS"/>
                    <input placeholder="Enter your fullname" name="fullname" onChange={changeHandler} required/>
                    <input placeholder="Enter your username" name="username" onChange={changeHandler} required/>
                    <input placeholder="Enter your password" type="password" name="password" onChange={changeHandler} required/>
                    <button onClick={registerHandler}>Register</button>
                    <p>Already registered? <label onClick={() => {
                        setSignup(false)
                        setLogin(true)
                    }} style={{color: 'blue',cursor: "pointer"}}>Login here</label></p>
                    <ToastContainer />
                </div>

            }
            {
                portfolioVisibility && <div>
                    <h5>Setup a portfolio ? </h5>
                    <button onClick={() => skipHandler(false)}>Skip</button>
                    <button onClick={() => setUpPortfolio(true)}>Yes</button>
                </div>
            }

        </div>
    )
}

export default Signup