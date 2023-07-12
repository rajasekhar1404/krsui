import { UPDATE_TASKPADS } from "./actionTypes";

const taskpadReducer = (state={}, action) => {
    switch (action.type) {
        case UPDATE_TASKPADS : return {
            ...state,
            taskpads: action.payload
        }
        default : return state
    }
}

export default taskpadReducer