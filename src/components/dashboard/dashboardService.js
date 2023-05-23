import { useState } from "react"
import Signup from "../authentication/signup"
import Login from "../authentication/login"
import PublicDashboard from "./publicDashboard"

const DashBoardService = () => {

    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false)

    return (
        <div>
            {
                (function(){
                    if (signup) {
                        return <Signup setLogin={setLogin} setSignup={setSignup} />
                    } else if(login) {
                        return <Login  setLogin={setLogin} setSignup={setSignup} />
                    } else {
                        return <PublicDashboard setSignup={setSignup} setLogin={setLogin}/>
                    }
                })()
            }
        </div>
    )
}

export default DashBoardService