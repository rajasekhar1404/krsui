import { FORGOT_PASSWORD_SEND_EMAIL, LOGGEDINUSER, LOGIN, PROFILE_PHOTO, UPDATE_USER, USER_BY_EMAIL } from "./taskApis"
import { OK } from '../utils/constants'
import makeRequest from "./makeRequest"
import { toast } from "react-toastify"

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
    try {
        const response = await fetch(LOGIN, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(response)
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
    } catch (err) {
        toast.error('Invalid credentials', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
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
        toast.error('Email id not registered, Please register', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    } else {
        toast.success('Verification code sent to your registered mail.', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    return response;
}