import { useState } from "react"
import { REGISTER } from "../apis/taskApis"
import { OK } from "../utils/constants"
import { ToastContainer, toast } from "react-toastify"
import HomeLogo from '../../static/title.svg'
import PublicDashboard from "../dashboard/publicDashboard"
import UpdateDashboard from "../dashboard/updateDashBoard"

const Signup = ({ setSignup, setLogin }) => {
    
    const [portfolioVisibility, setPortfolioVisibility] = useState(false)

    const [user, setUser] = useState({
        fullname: "",
        username: "username",
        email: "contact@gmail.com",
        password: "password",
        aboutMe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        experiences: [
            {
                conmanyName: "krs private limited",
                joinedAt: "2020",
                workedTill: "till now",
                projectName: "Project name",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rolesAndResponsibilities: "- Aliquam tincidunt mauris eu risus.\n- Aliquam tincidunt mauris eu risus.\n- Nunc dignissim risus id metus.\n- Cras ornare tristique elit."
            }
        ],
        projects: [
            {
                projectName: "Project name",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                projectName: "Project name",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
        ],
        skills : [ "java", "node js", "spring", "mongodb", "aws" ],
        contact: {
            address: "H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.",
        },
        portfolio : {
            isRequired: false,
            isPublic: false
        }
    })

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })        
    }

    const registerHandler = async () => {


        try {
            // const response = await fetch(REGISTER, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type' : 'application/json'
            //     },
            //     body: JSON.stringify(user)
            // })
            // if (response.status !== OK) {
            //     let message;
            //     const error = await response.json()
            //     error.message.includes('duplicate') ? message = 'user already registered, please login' : message = error.message
            //     toast.error(message, {
            //         position: toast.POSITION.BOTTOM_RIGHT
            //     })
            // } else {
                    // setSignup(false)
                    // setLogin(true)
            // }

            setPortfolioVisibility(!portfolioVisibility)

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
        setUser({
            ...user,
            portfolio : {
                isRequired: true,
                isPublic: false
            }
        })
    }

    return (
        <div>
            {

            user.portfolio.isRequired ? <UpdateDashboard /> : <div className="login-container">
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