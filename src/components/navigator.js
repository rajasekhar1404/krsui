import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import NavigationBar from "./navigationBar";
import DashBoard from "./dashboard";
import TasksDashboard from "./tasks";
import TaskPad from "./taskPad";

const Navigator = ({setActive}) => {
    return (
        <Router>
        <NavigationBar setActive={setActive} />
            <Routes>
                <Route path='*' element={<DashBoard />} />
                <Route path='/tasks' element={<TasksDashboard/>} />
                <Route path='/taskpad' element={<TaskPad />}/>
            </Routes>
        </Router>
    )
}

export default Navigator