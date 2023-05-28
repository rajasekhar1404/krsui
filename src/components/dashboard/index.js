import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { LOGGEDINUSER } from "../apis/taskApis";
import INSTAGRAM from '../../static/instagram.png'
import TWITTER from '../../static/twitter.png'
import FACEBOOK from '../../static/facebook.png'
import KRSLOGO from '../../static/user-profilephoto.png'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import UpdateDashboard from "./updateDashBoard";

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
                <section>
                    <div className='user-header'>
                        <img  className='profile-photo' src={KRSLOGO} alt="Profile" />
                        <label className='dashboard-username'>{user.fullname}</label>
                    </div>    
                </section>
                <section>
                    <div>
                        <div className='section-wrapper'>
                            <div className='section-type'>
                                ABOUT ME
                            </div>
                        </div>
                        <p className='about-content'>&emsp;&emsp;&emsp;{user.aboutMe}</p>
                    </div>
                </section>
                <section>
                    <div>
                        <div className='section-wrapper'>
                            <div className='section-type'>
                                Experiences
                            </div>
                        </div>
                       {
                        user.experiences && user.experiences.map((eachExperience, index) => index !== 0 && <div key={eachExperience.companyName}>
                            <div className='company-experience'>
                                <span className='company-name'>{eachExperience.companyName}</span>
                                <span className='company-years'>{eachExperience.joinedAt} - {eachExperience.workedTill}</span>
                            </div>
                            <div>
                                <p className='project-title'>{eachExperience.projectName}</p>
                                <p className='project-description'>{eachExperience.projectDescription}</p>
                                <p className='roles-and-responsibilities'>Roles and Responsiblities</p>
                                <ReactMarkdown>{eachExperience.rolesAndResponsibilities}</ReactMarkdown>
                            </div>
                        </div>)
                       }
                    </div>
                </section>
                <section>
                    <div>
                        <div className='section-wrapper'>
                            <div className='section-type'>
                                Projects
                            </div>
                        </div>
                    {
                        user.projects && user.projects.map((eachProject, index) => index !== 0 && <div>
                            <p className='project-title'>{eachProject.projectName}</p>
                            <p className='project-description'>{eachProject.projectDescription}</p>
                        </div>)
                    }
                    </div>
                </section>
                <section>
                    <div>
                        <div className='section-wrapper'>
                            <div className='section-type'>
                                Skills
                            </div>
                        </div>
                        <div className='skills-wrapper'>
                            <div className='skills-roller'>
                            {
                            user.skills && user.skills.map((eachSkill, index) => index !== 0 && <span className='skill-container' key={index}>{eachSkill}</span>
                            )
                        }

                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='contact-container'>
                        <div>
                            <div className='contact-heading'>Contact me</div>
                        </div>
                        <div className='contact-content'>
                            {
                                user.contact && <>
                                    <div className='address-container'>
                                        <p className='address-heading'>Address:</p>
                                        <div className='address-content'>{user.contact.address}</div>
                                    </div>
                                    <div>
                                        <p className='address-heading'>Email: </p>
                                        <div className='address-content'>{user.email}</div>
                                        <div className='social-container'>
                                            <a href={user.contact.instagram}><img src={INSTAGRAM} alt='Instagram'/></a>
                                            <a href={user.contact.twitter}><img src={TWITTER} alt='Twitter'/></a>
                                            <a href={user.contact.facebook}><img src={FACEBOOK} alt='Facebook'/></a>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </section>
                </div>
            </div>
        }
        </>
    )
}

export default DashBoard;