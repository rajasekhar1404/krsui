import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import UpdateDashboard from "./updateDashBoard";
import KRSLOGO from '../../static/CentralHub_black_logo_500_500.png'
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from "../utils/userPortfolioBlocks";
import { getLoggedInUser, getProfilePhoto } from "../apis/userRequests";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import TaskpadList from "../taskPad/taskPadList";
import { findAllTaskpadTitlesAndIds } from "../apis/taskpadRequest";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/user/actionCreator";

const DashBoard = () => {

    const [user, setUser] = useState({})
    const [email, setEmail] = useState(null)
    const [userPhoto, setUserPhoto] = useState("")
    const [updateDashBoard, setUpdateDashboard] = useState(false)
    const [titles, setTitles] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        async function getUserData() {
            await getUserProfile()
            await getUserTaskpads()
            const photo = await getProfilePhoto()
            setUserPhoto(photo.profilePhoto)
        }
        getUserData()
    }, [])

    
    const getUserProfile = async () => {
        const data = await getLoggedInUser()
        if (data) {
            dispatch(updateUser(data))
            setUser(prev => ({
                ...prev,
                ...data
            }))
        }
    }
    
    const getUserTaskpads = async () => {
        const taskpads = await findAllTaskpadTitlesAndIds()
        setTitles(taskpads)
    }
    
    const handleChange = (e) => {
        setEmail(e.target.value);
	}
    
    document.title = user.fullname || 'CentralHub'
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
                        <input placeholder="Enter email" onChange={handleChange}/>
                        <Link to={"/user/" + email}><button>Search</button></Link>
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
                    <TaskpadList titles={titles}/>
                    <ContactHolder contact={user.contact} email={user.email}/>
                </div>
            </div>
        }
        <ToastContainer />
        </>
    )
}

export default DashBoard;