import { UPDATE_USER } from "./user/actionTypes";
import { ADD_NEW_TASKPAD, UPDATE_TASKPADS } from "./taskpad/actionTypes";

const initialState = {
    user: {},
    taskpads: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_TASKPADS : return {
            ...state,
            taskpads: action.payload
        }
        case ADD_NEW_TASKPAD : return {
            ...state,
            taskpads: [
                ...state.taskpads,
                action.payload
            ]
        }
        case UPDATE_USER : return {
            ...state,
            user: action.payload
        }
        default : return state
    }
}

export default reducer