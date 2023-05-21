import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { LOGGEDINUSER } from "../apis/taskApis";
const DashBoard = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getLoggedInUser()
    }, [])

    const getLoggedInUser = async () => {
        const response = await fetch(LOGGEDINUSER, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('key')}`
            }
        })
        const data = await response.json()
        setUser(data)
    }

    return (
        <>
            <h1 className="dashboard-container">{user.fullname}</h1>
        </>
    )
}

export default DashBoard;