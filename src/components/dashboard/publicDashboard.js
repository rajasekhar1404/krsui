import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import KRSLOGO from '../../static/user-profilephoto.png'
import INSTAGRAM from '../../static/instagram.png'
import TWITTER from '../../static/twitter.png'
import FACEBOOK from '../../static/facebook.png'

const PublicDashboard = ({ setSignup, setLogin }) => {

    const user = {
        fullname: "FULL NAME",
        aboutMe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        experiences: [
            {
                conmanyName: "krs private limited",
                joinedAt: "2020",
                workedTill: "till now",
                projectName: "Project name",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                rolesAndResponsibilities: "- Aliquam tincidunt mauris eu risus.\n- Aliquam tincidunt mauris eu risus.\n- Nunc dignissim risus id metus.\n- Cras ornare tristique elit."
            }
        ],
        projects: [
            {
                projectName: "Project name",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                projectName: "Project name",
                projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
        ],
        skills : [ "java", "node js", "spring", "mongodb", "aws" ],
        contact: {
            address: "H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.",
            email: "contact@gmail.com"
        }
    }

    return (
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
                        setLogin(false)
                        setSignup(true)
                    }}>Sign up</button>
                    <button onClick={() => {
                        setSignup(false)
                        setLogin(true)
                    }}>Sign in</button>
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
                    <p className='about-content'>{user.aboutMe}</p>
                </div>
            </section>
            <section>
                <div>
                    <div className='section-wrapper'>
                        <div className='section-type'>
                            Experiences
                        </div>
                    </div>
                    <div className='company-experience'>
                        <span className='company-name'>{user.experiences[0].conmanyName}</span>
                        <span className='company-years'>{user.experiences[0].joinedAt} - {user.experiences[0].workedTill}</span>
                    </div>
                    <div>
                        <p className='project-title'>{user.experiences[0].projectName}</p>
                        <p className='project-description'>{user.experiences[0].projectDescription}</p>
                        <p className='roles-and-responsibilities'>Roles and Responsiblities</p>
                        <ReactMarkdown>{user.experiences[0].rolesAndResponsibilities}</ReactMarkdown>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='section-wrapper'>
                        <div className='section-type'>
                            Projects
                        </div>
                    </div>
                    <div>
                        <p className='project-title'>{user.projects[0].projectName}</p>
                        <p className='project-description'>{user.projects[0].projectDescription}</p>
                    </div>
                    <div>
                        <p className='project-title'>{user.projects[1].projectName}</p>
                        <p className='project-description'>{user.projects[1].projectDescription}</p>
                    </div>
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
                            <span className='skill-container'>{user.skills[0]}</span>
                            <span className='skill-container'>{user.skills[1]}</span>
                            <span className='skill-container'>{user.skills[2]}</span>
                            <span className='skill-container'>{user.skills[3]}</span>
                            <span className='skill-container'>{user.skills[4]}</span>
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
                        <div className='address-container'>
                            <p className='address-heading'>Address:</p>
                            <div className='address-content'>{user.contact.address}</div>
                        </div>
                        <div>
                            <p className='address-heading'>Email: </p>
                            <div className='address-content'>{user.contact.email}</div>
                            <div className='social-container'>
                                <a href='http://www.google.com'><img src={INSTAGRAM} alt='Instagram'/></a>
                                <a href='http://www.google.com'><img src={TWITTER} alt='Twitter'/></a>
                                <a href='http://www.google.com'><img src={FACEBOOK} alt='Facebook'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}

export default PublicDashboard