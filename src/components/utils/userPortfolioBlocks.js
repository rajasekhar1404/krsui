import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import INSTAGRAM from '../../static/instagram.png'
import TWITTER from '../../static/twitter.png'
import FACEBOOK from '../../static/facebook.png'
import KRSLOGO from '../../static/user-profilephoto.png'

export const ExperienceBlock = ({user, setUser, eachExperience}) => {
    
    const handleChange = (e) => {
        
        let updatedExperiences = user.experiences
        let currentExperience = user.experiences[eachExperience.count - 1]
        currentExperience = {
            ...currentExperience,
            [e.target.name]: e.target.value
        }

        updatedExperiences[eachExperience.count - 1] = currentExperience

        setUser({
            ...user,
            experiences: updatedExperiences
        })
    }

    return (
        <table>
            <tbody>
                <tr className="update-portfolio-form-row">
                    <td>Company name</td>
                    <td>
                        <input 
                            name='companyName' 
                            value={eachExperience.companyName}
                            placeholder="Enter your company name"
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr className="update-portfolio-form-row">
                    <td>Joined at</td>
                    <td>
                        <input 
                            name='joinedAt' 
                            type='date'
                            value={eachExperience.joinedAt}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr className="update-portfolio-form-row">
                    <td>Relieved at</td>
                    <td>
                        <input 
                            name='workedTill' 
                            type='date'
                            value={eachExperience.workedTill}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr className="update-portfolio-form-row">
                    <td>Project name</td>
                    <td>
                        <input 
                            name='projectName' 
                            value={eachExperience.projectName}
                            placeholder='Enter your project name'
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr className="update-portfolio-form-row">
                    <td>Project description</td>
                    <td>
                        <textarea 
                            name='projectDescription' 
                            value={eachExperience.projectDescription}
                            placeholder="Enter your project description"
                            onChange={handleChange}
                        ></textarea>
                    </td>
                </tr>
                <tr className="update-portfolio-form-row">
                    <td>Roles & responsibilities</td>
                    <td>
                        <textarea 
                            name='rolesAndResponsibilities' 
                            value={eachExperience.rolesAndResponsibilities}
                            placeholder="Enter your project roles & responsibilities"
                            onChange={handleChange}
                        ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export const ProjectBlock = ({ user, setUser, eachProject }) => {

    const handleChange = (e) => {
        let updatedProjects = user.projects
        let currentProject = user.projects[eachProject.count - 1]
        currentProject = {
            ...currentProject,
            [e.target.name]:e.target.value
        }
        updatedProjects[eachProject.count - 1] = currentProject

        setUser({
            ...user,
            projects: updatedProjects
        })
    }

    return (
        <table>
            <tbody>
                <tr className="update-portfolio-form-row">
                    <td>Project name</td>
                    <td>
                        <input 
                            name='projectName' 
                            value={eachProject.projectName}
                            placeholder='Enter your project name'
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr className="update-portfolio-form-row">
                    <td>Project description</td>
                    <td>
                        <textarea 
                            name='projectDescription' 
                            value={eachProject.projectDescription}
                            placeholder="Enter your project description"
                            onChange={handleChange}
                        ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export const SkillsBlock = ({ user, setUser, eachSkill }) => {

    const handleChange = (e) => {

        let updatedSkills = user.skills
        let currentSkill = user.skills[eachSkill.count - 1]
        currentSkill = {
            ...currentSkill,
            [e.target.name]:e.target.value
        }
        updatedSkills[eachSkill.count - 1] = currentSkill

        setUser({
            ...user,
            skills: updatedSkills
        })
    }

    return (
        <table>
            <tbody>
                <tr className="update-portfolio-form-row">
                    <td>Skill</td>
                    <td>
                        <input 
                            name='skill' 
                            value={eachSkill.skill}
                            placeholder="Enter your skill" 
                            onChange={handleChange}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export const ExperienceHolder = ({experiences}) => {
    return (
        <>
        {
            experiences && experiences.length > 0 && <section>
                <div className='section-wrapper'>
                    <div className='section-type'>
                        Experiences
                    </div>
                </div>
               {
                experiences.map((eachExperience, index) => <div key={index}>
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
        </section>
        }
        </>
    )
}

export const ProjectHolder = ({ projects }) => {
    return (
        <>
            {
                projects && projects.length > 0 && <section>
                    <div>
                        <div className='section-wrapper'>
                            <div className='section-type'>
                                Projects
                            </div>
                        </div>
                        {
                            projects.map((eachProject, index) => <div key={index}>
                                <p className='project-title'>{eachProject.projectName}</p>
                                <p className='project-description'>{eachProject.projectDescription}</p>
                            </div>)
                        }
                    </div>
                </section>
            }
        </>
    )
}

export const SkillHolder = ({ skills }) => {
    return (
        <>
            {
                skills && skills.length > 0 && <section>
                    <div className='section-wrapper'>
                        <div className='section-type'>
                            Skills
                        </div>
                    </div>
                    <div className='skills-wrapper'>
                        <div className='skills-roller'>
                        {
                            skills.map((eachSkill, index) => <span className='skill-container' key={index}>{eachSkill.skill}</span>)
                        }
                        </div>
                    </div>
            </section>
            }
        </>
    )
}

export const ContactHolder = ({ contact, email }) => {
    return (
        <section>
            <div className='contact-container'>
                <div>
                    <div className='contact-heading'>Contact me</div>
                </div>
                <div className='contact-content'>
                    {
                        contact && <>
                            <div className='address-container'>
                                <p className='address-heading'>Address:</p>
                                <div className='address-content'>{contact.address}</div>
                            </div>
                            <div>
                                <p className='address-heading'>Email: </p>
                                <div className='address-content'>{email}</div>
                                <div className='social-container'>
                                    <a href={contact.instagram}><img src={INSTAGRAM} alt='Instagram'/></a>
                                    <a href={contact.twitter}><img src={TWITTER} alt='Twitter'/></a>
                                    <a href={contact.facebook}><img src={FACEBOOK} alt='Facebook'/></a>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export const AboutMeHolder = ({ fullname, aboutMe }) => {
    return (
        <>
            <section>
                <div className='user-header'>
                    <img  className='profile-photo' src={KRSLOGO} alt="Profile" />
                    <label className='dashboard-username'>{fullname}</label>
                </div>    
            </section>
            <section>
                <div>
                    <div className='section-wrapper'>
                        <div className='section-type'>
                            ABOUT ME
                        </div>
                    </div>
                    <p className='about-content'>&emsp;&emsp;&emsp;{aboutMe}</p>
                </div>
            </section>
        </>
    )
}