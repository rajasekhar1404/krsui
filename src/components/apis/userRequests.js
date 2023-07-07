import { FORGOT_PASSWORD_SEND_EMAIL, FORGOT_PASSWORD_VERIFY_OTP, LOGGEDINUSER, LOGIN, PROFILE_PHOTO, REGISTER, UPDATE_PASSWORD_FORGOT, UPDATE_USER, USER_BY_EMAIL } from "./taskApis"
import { OK } from '../utils/constants'
import makeRequest from "./makeRequest"
import { toast } from "react-toastify"

export const registerUser = async (user) => {
    const response = await makeRequest(REGISTER, user, 'POST')
    if (response.status !== OK) {
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
            return response
    }
}

export const getLoggedInUser = async () => {
    const response = await makeRequest(LOGGEDINUSER)
    if (response.status === OK) {
        return await response.json()
    }
    return false
}

export const findUserByEmail = async (email) => {
	return await makeRequest(USER_BY_EMAIL + "/" + email)

}

export const getProfilePhoto = async () => {
    const response = await makeRequest(PROFILE_PHOTO)
    if (response.status === OK) {
        return await response.json()
    }
}

export const updateUserProfile = async (user) => {
    return await makeRequest(UPDATE_USER, user, 'POST')
}

export const updateUserPhoto = async (photo) => {
    return await makeRequest(PROFILE_PHOTO, {profilePhoto: photo}, 'POST')
}


export async function loginHandler (user) {
    const response = await makeRequest(LOGIN, user, 'POST')
    if (response.status !== OK) {
        toast.error('Invalid credentials', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return false
    } else {
        const data = await response.json()
        localStorage.setItem('key', data.key)
        return true;
    }
}

export const sendForgotPasswordCode = async (email) => {
    if (!email) {
        toast.warn('Email is required', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return
    }
    const response = await makeRequest(FORGOT_PASSWORD_SEND_EMAIL + "/" + email)
    if (response.status === 500) {
        toast.error(email + ' not registered, Please register', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    } else {
        toast.success('Verification code sent to your registered mail.', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    return response;
}

export const verifyFortgotPasswordOTP = async (user) => {
    const response = await makeRequest(FORGOT_PASSWORD_VERIFY_OTP, user, 'POST')
    if (response.status === 500) {
        const data = await response.json()
        toast.error(data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    return response
}

export const updateForgotPassword = async (user) => {
    const response = await makeRequest(UPDATE_PASSWORD_FORGOT, user, 'POST')
    if (response.status === 500) {
        const data = await response.json()
        toast.error(data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return
    }
    return response
}