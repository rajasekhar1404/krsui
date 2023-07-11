import {
    Route,
    Routes,
  } from "react-router-dom";
import NavigationBar from "./navigationBar";
import DashBoard from "../dashboard";
import TasksDashboard from "../tasks";
import TaskPad from "../taskPad";
import ErrorPage from "../utils/errorpage";
import UserPortfolio from "../dashboard/userPortfolio";

const Navigator = ({setActive}) => {
    return (
        <>
            <NavigationBar setActive={setActive} />
            <Routes>
                <Route path="*" element={<ErrorPage />}/>
                <Route path='/' element={<DashBoard />} />
                <Route path='/tasks' element={<TasksDashboard/>} />
                <Route path='/taskpad/:id' element={<TaskPad />}/>
                <Route path='/taskpad' element={<TaskPad />}/>
                <Route path="/user/:email" element={<UserPortfolio />}/>
            </Routes>
        </>
    )
}

export default Navigator