import { Route, Routes } from "react-router-dom"
import Login from "../authentication/login"
import Signup from "../authentication/signup"
import PublicDashboard from "../dashboard/publicDashboard"
import PublicHeader from "../utils/publicHeader"
import UserPortfolio from "../dashboard/userPortfolio"
import ErrorPage from "../utils/errorpage"

const PublicNavigator = ({ setActive }) => {
    return (
        <>
            <PublicHeader />
            <Routes>
                <Route path="*" element={<ErrorPage />}/>
                <Route path="/" element={<PublicDashboard />}/>
                <Route path="/login" element={<Login setActive={setActive} />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/user/:email" element={<UserPortfolio />} />
            </Routes>
        </>
    )
}

export default PublicNavigator