import { useState } from "react"
import { toast } from "react-toastify"
import { sendForgotPasswordCode, updateForgotPassword, verifyFortgotPasswordOTP } from "../apis/userRequests"
import { OK } from "../utils/constants"

const ForgotPassword = ({ setForgotPassword }) => {

    const [user, setUser] = useState({
        email: '',
        otp: 0,
        password: '',
        isOtpSent: false,
        isValidOtp: false
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const sendOtpMail = async (e) => {
        e.preventDefault()
        const response = await sendForgotPasswordCode(user.email)
        if (response.status === OK) {
            setUser({
                ...user,
                isOtpSent: true
            })
        }
    }

    const backtoLogin = () => {
        setForgotPassword(false)
    }

    const handleOtpVerify = async (e) => {
        e.preventDefault()
        
        const response = await verifyFortgotPasswordOTP(user)
        if (response.status === 200) {
            setUser({
                ...user,
                isValidOtp: true,
                isOtpSent: false
            })

            toast.success('OTP verified successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    const updatePassword = async (e) => {
        e.preventDefault()
        const response = await updateForgotPassword(user)
        if (response.status === 200) {
            toast.success('Password updated successfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            setForgotPassword(false)
        }
    }

    return (
        <div className="login-container">
            <form>
                <h3>Reset password</h3>
                {
                    (function() {
                        if (user.isOtpSent) return <>
                                <input placeholder="Enter the OTP" type="number" name="otp" onChange={handleChange}/>
                                <button onClick={handleOtpVerify}>Verify</button>
                            </>
                        else if (user.isValidOtp) return <>
                                <input placeholder="Enter new password" onChange={handleChange} name="password" type="password"/>
                                <button onClick={updatePassword}>Update</button>
                            </>
                        else return <>
                                <input placeholder="Enter registered email" type="email" onChange={handleChange} name="email" required/>
                                <button onClick={sendOtpMail}>Send OTP</button>                        
                            </>
                    })()
                }
            </form>
        </div>
    )
}

export default ForgotPassword