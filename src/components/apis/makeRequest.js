import { toast } from "react-toastify"

const makeRequest = async (url, body, type, headers) => {

    const fetchOptions = {}

    if (type) {
        fetchOptions.method = type
    } else {
        fetchOptions.method = 'GET'
    }

    if (body) {
        fetchOptions.body = JSON.stringify(body)
    }

    if (headers) {
        fetchOptions.headers = headers
    } else {
        fetchOptions.headers = {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('key')}`
        }
    }
    try {
        const resposne = await fetch(url, fetchOptions)
        if (!resposne) {
            throw new Error('Something went wrong')
        }
        return resposne
    } catch(e) {
        toast.error('Server is down, please try later.', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
}

export default makeRequest