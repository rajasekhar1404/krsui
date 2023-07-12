import { UPDATE_TASKPADS } from "./actionTypes"

export const updateTaskpads = (payload) => {
    return {
        type: UPDATE_TASKPADS,
        payload: payload
    }
}