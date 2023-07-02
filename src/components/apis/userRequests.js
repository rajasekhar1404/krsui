import { LOGGEDINUSER, PROFILE_PHOTO, UPDATE_USER } from "./taskApis"
import { OK } from '../utils/constants'
import makeRequest from "./makeRequest"

export const getLoggedInUser = async () => {
    const response = await makeRequest(LOGGEDINUSER)
    if (response.status === OK) {
        return await response.json()
    }
    return false
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