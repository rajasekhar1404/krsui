import { UPDATE_USER } from "./actionTypes"

export const updateUser = ( payload ) => {
    return {
        type: UPDATE_USER,
        payload: payload
    }
}