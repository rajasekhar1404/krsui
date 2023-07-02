const BASE_URL = 'https://rajasekhar.up.railway.app/api'
// const BASE_URL = 'http://localhost:8080/api'
// const BASE_URL = 'https://krs-backend-lwq1.onrender.com'

// tasks
export const GET_ALL_TASKS = `${BASE_URL}/tasks/`
export const CREATE_TASK = `${BASE_URL}/tasks/create`
export const UPDATE_TASK = `${BASE_URL}/tasks/update`
export const DELETE_TASK = `${BASE_URL}/tasks/`

// taskpad
export const TASK_PAD_UPDATE = `${BASE_URL}/taskpad/update`
export const GET_TASK_PAD_CONTENT = `${BASE_URL}/taskpad`

// users
export const REGISTER = `${BASE_URL}/users/register`
export const LOGIN = `${BASE_URL}/users/login`
export const LOGGEDINUSER = `${BASE_URL}/users/user`
export const UPDATE_USER = `${BASE_URL}/users/update`
export const PROFILE_PHOTO = `${BASE_URL}/users/profilePhoto`