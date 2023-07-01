import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { LOGGEDINUSER } from "../apis/taskApis";
import UpdateDashboard from "./updateDashBoard";
import KRSLOGO from '../../static/user-profilephoto.png'
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from "../utils/userPortfolioBlocks";

const DashBoard = () => {

    const [user, setUser] = useState({})
    const [updateDashBoard, setUpdateDashboard] = useState(false)

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
        {
            updateDashBoard ? <UpdateDashboard setUpdateDashboard={setUpdateDashboard} /> :
            <div className='portfolio-dashboard'>
                <section className="dashboard-header">
                    <span className='dashboard-logo'>
                        <img src={KRSLOGO} alt='krslogo' />
                    </span>
                    <span className='search-wrapper'>
                        <input placeholder="Enter username"/>
                        <button>Search</button>
                    </span>
                    <span className='login-wrapper'>
                        <button onClick={() => {
                            setUpdateDashboard(!updateDashBoard)
                        }}>Update</button>
                    </span>
                </section>
                <div className='portfolio-container'>
                    <AboutMeHolder fullname={user.fullname} aboutMe={user.aboutMe}/>
                    <ExperienceHolder experiences={user.experiences}/>
                    <ProjectHolder projects={user.projects}/>
                    <SkillHolder skills={user.skills}/>
                    <ContactHolder contact={user.contact} email={user.email}/>
                </div>
            </div>
        }
        </>
    )
}

export default DashBoard;