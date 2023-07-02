import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import UpdateDashboard from "./updateDashBoard";
import KRSLOGO from '../../static/title.svg'
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from "../utils/userPortfolioBlocks";
import { getLoggedInUser, getProfilePhoto } from "../apis/userRequests";

const DashBoard = () => {

    const [user, setUser] = useState({})
    const [userPhoto, setUserPhoto] = useState("")
    const [updateDashBoard, setUpdateDashboard] = useState(false)

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async () => {
        const data = await getLoggedInUser()
        if (data) {
            setUser(prev => ({
                ...prev,
                ...data
            }))
        const photo = await getProfilePhoto()
        setUserPhoto(photo.profilePhoto)
        }
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
                    <AboutMeHolder fullname={user.fullname} aboutMe={user.aboutMe} profilePhoto={userPhoto}/>
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