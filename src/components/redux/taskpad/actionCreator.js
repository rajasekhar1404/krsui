import { ADD_NEW_TASKPAD, UPDATE_TASKPADS } from "./actionTypes"

export const updateTaskpads = (payload) => {
    return {
        type: UPDATE_TASKPADS,
        payload: payload
    }
}

export const addNewTaskpad = (payload) => {
    return {
        type: ADD_NEW_TASKPAD,
        payload: payload
    }
}