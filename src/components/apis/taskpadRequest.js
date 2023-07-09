import makeRequest from '../apis/makeRequest'
import { GET_ALL_TASKPAD_TITLES, GET_TASKPAD_BY_ID, TASK_PAD_UPDATE } from './taskApis'
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