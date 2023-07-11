import makeRequest from '../apis/makeRequest'
import { CREATE_TASKPAD, DELETE_TASKPAD, GET_ALL_PUBLIC_TASKPAD_TITLES, GET_ALL_TASKPAD_TITLES, GET_TASKPAD_BY_ID, TASK_PAD_UPDATE } from './taskApis'
import { INTERNAL_SERVER_ERROR } from '../utils/constants'
import { toast } from 'react-toastify'

export const findAllTaskpadTitlesAndIds = async () => {
   const response = await makeRequest(GET_ALL_TASKPAD_TITLES)
   if ( response.status === INTERNAL_SERVER_ERROR ) {
    const data = await response.json()
    toast.error(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return
   }
   return await response.json()
}

export const findTaskpadById = async (taskpadId) => {
   const response = await makeRequest(GET_TASKPAD_BY_ID + taskpadId)
   if (response.status === INTERNAL_SERVER_ERROR) {
    const data = await response.json()
    toast.error(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return
   }
   return await response.json()
}

export const updateTaskpad = async (taskpad) => {
    const response = await makeRequest(TASK_PAD_UPDATE, taskpad, 'POST')
    if (response.status === INTERNAL_SERVER_ERROR) {
        const data = await response.json()
        toast.error(data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return
    }
    return await response.json()
}

export const createNewTaskpad = async (title) => {
    const response = await makeRequest(CREATE_TASKPAD, {
        title: title,
        content: '',
        isPublic: false
    }, 'POST')
    if (response.status === INTERNAL_SERVER_ERROR) {
        const data = await response.json()
        toast.error(data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return
    }
    return await response.json()
}

export const deleteTaskpadById = async (taskpadId) => {
    const response = await makeRequest(DELETE_TASKPAD + taskpadId, null, 'DELETE')
    if (response.status === INTERNAL_SERVER_ERROR) {
        const data = await response.json()
        toast.error(data.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return
    }
    return await response.json()
}

export const findAllPublicTaskpadTitlesAndIds = async ( email ) => {
    const response = await makeRequest(GET_ALL_PUBLIC_TASKPAD_TITLES + email)
    if ( response.status === INTERNAL_SERVER_ERROR ) {
     const data = await response.json()
     toast.error(data.message, {
         position: toast.POSITION.BOTTOM_RIGHT
     })
     return
    }
    return await response.json()
 }

export const findPublicTaskpad = async ( email, tpId ) => {
const response = await makeRequest(GET_ALL_PUBLIC_TASKPAD_TITLES + email + "/" + tpId)
if ( response.status === INTERNAL_SERVER_ERROR ) {
    const data = await response.json()
    toast.error(data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
    })
    return
}
return await response.json()
}