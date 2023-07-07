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

    return await fetch(url, fetchOptions)
}

export default makeRequest