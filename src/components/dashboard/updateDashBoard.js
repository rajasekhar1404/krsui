import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import KRSLOGO from '../../static/user-profilephoto.png'
import INSTAGRAM from '../../static/instagram.png'
import TWITTER from '../../static/twitter.png'
import FACEBOOK from '../../static/facebook.png'
import PLUSICON from '../../static/plus.png'
import { useState } from 'react'

const UpdateDashboard = () => {
    const initialExperience = {
        companyName: "Random private limited",
        joinedAt: "2020",
        workedTill: "till now",
        projectName: "Project name",
        projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        rolesAndResponsibilities: "- Aliquam tincidunt mauris eu risus.\n- Aliquam tincidunt mauris eu risus.\n- Nunc dignissim risus id metus.\n- Cras ornare tristique elit."
    }

    const initialProject = {
        projectName: "Project name",
        projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }

    const initialContact = {
        address: "H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.",
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://www.instagram.com/'
    }

    const initialUser = {
        fullname: "FULL NAME",
        username: "username",
        email: "contact@gmail.com",
        password: "password",
        aboutMe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        experiences: [],
        projects: [],
        skills : [],
        contact: {}
    }
    
    const [user, setUser] = useState(initialUser)
    const [userExperience, setUserExperience] = useState(initialExperience)
    const [userExperienceArray, setUserExperienceArray] = useState([])
    const [projectsArray, setProjectsArray] = useState([])
    const [project, setProject] = useState(initialProject)
    const [skills, setSkills] = useState([])
    const [newSkill, setNewSkill] = useState('skill')
    const [userContact, setUserContact] = useState(initialContact)
    
    const experienceChangeHandler = (e) => {
        setUserExperience(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const projectChangeHandler = (e) => {
        setProject(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const skillChangeHandler = (e) => {
        setNewSkill(e.target.value)
    }

    const contactChangeHandler = (e) => {
        setUserContact({
            ...userContact,
            [e.target.name]:e.target.value
        })
    }

    const addExperienceSection = () => {

        var newTable = document.createElement('table')
        var tbody = document.createElement('tbody')

        newTable.appendChild(tbody)

        var companyNameRow = document.createElement('tr');
        companyNameRow.className = "update-portfolio-form-row"
        
        companyNameRow.innerHTML = `
          <td>Company name</td>
          <td><input name='companyName' placeholder="Enter your company name"/></td>
        `;

        var companyNameBox = companyNameRow.querySelector('input[name="companyName"]');
        companyNameBox.addEventListener('change', experienceChangeHandler);

        tbody.appendChild(companyNameRow);

        var joinedAtRow = document.createElement('tr');
        joinedAtRow.className = "update-portfolio-form-row"
        joinedAtRow.innerHTML = `
          <td>Joined at</td>
          <td><input name='joinedAt' type='date'/></td>
        `;
        tbody.appendChild(joinedAtRow);

        var joinedAtBox = joinedAtRow.querySelector('input[name="joinedAt"]');
        joinedAtBox.addEventListener('change', experienceChangeHandler);

        var relievedAtRow = document.createElement('tr');
        relievedAtRow.className = "update-portfolio-form-row"
        relievedAtRow.innerHTML = `
          <td>Relieved at</td>
          <td><input name='workedTill' type='date'/></td>
        `;
        tbody.appendChild(relievedAtRow);

        var relievedAtBox = relievedAtRow.querySelector('input[name="workedTill"]');
        relievedAtBox.addEventListener('change', experienceChangeHandler);

        var projectNameRow = document.createElement('tr');
        projectNameRow.className = "update-portfolio-form-row"
        projectNameRow.innerHTML = `
          <td>Project name</td>
          <td><input name='projectName' placeholder='Enter your project name'/></td>
        `;
        tbody.appendChild(projectNameRow);

        var projectNameBox = projectNameRow.querySelector('input[name="projectName"]');
        projectNameBox.addEventListener('change', experienceChangeHandler);

        var projectDescriptionRow = document.createElement('tr');
        projectDescriptionRow.className = "update-portfolio-form-row"
        projectDescriptionRow.innerHTML = `
          <td>Project description</td>
          <td><textarea name='projectDescription' placeholder="Enter your project description"></textarea></td>
        `;
        tbody.appendChild(projectDescriptionRow);

        var projectDescriptionBox = projectDescriptionRow.querySelector('textarea[name="projectDescription"]');
        projectDescriptionBox.addEventListener('change', experienceChangeHandler);

        var rolesResponsibilitiesRow = document.createElement('tr');
        rolesResponsibilitiesRow.className = "update-portfolio-form-row"
        rolesResponsibilitiesRow.innerHTML = `
          <td>Roles & responsibilities</td>
          <td><textarea name='rolesAndResponsibilities' placeholder="Enter your project roles & responsibilities"></textarea></td>
        `;
        tbody.appendChild(rolesResponsibilitiesRow);

        var rolesResponsibilitiesBox = rolesResponsibilitiesRow.querySelector('textarea[name="rolesAndResponsibilities"]');
        rolesResponsibilitiesBox.addEventListener('change', experienceChangeHandler);


        var plusIconRow = document.getElementById('experiences');
        plusIconRow.parentNode.insertBefore(newTable, plusIconRow);

        setUserExperienceArray([
            ...userExperienceArray,
            userExperience
        ])

        setUserExperience(initialExperience)
    }

    const addProjectSection = () => {
        var newTable = document.createElement('table')
        var tbody = document.createElement('tbody')

        newTable.appendChild(tbody)

        var projectNameRow = document.createElement('tr');
        projectNameRow.className = "update-portfolio-form-row"
        projectNameRow.innerHTML = `
            <td>Project name</td>
            <td><input name='projectName' placeholder='Enter your project name'/></td>
        `

        var projectNameBox = projectNameRow.querySelector('input[name="projectName"]');
        projectNameBox.addEventListener('change', projectChangeHandler);


        var projectDescriptionRow = document.createElement('tr');
        projectDescriptionRow.className = "update-portfolio-form-row"
        projectDescriptionRow.innerHTML = `
            <td>Project description</td>
            <td><textarea name='projectDescription' placeholder="Enter your project description"></textarea></td>
        `

        var projectDescriptionBox = projectDescriptionRow.querySelector('textarea[name="projectDescription"]');
        projectDescriptionBox.addEventListener('change', projectChangeHandler);

        tbody.appendChild(projectNameRow)
        tbody.appendChild(projectDescriptionRow)

        var plusIconRow = document.getElementById('projects');
        plusIconRow.parentNode.insertBefore(newTable, plusIconRow);

        setProjectsArray([
            ...projectsArray,
            project
        ])
        setProject(initialProject)
    }

    const addSkillsSection = () => {
        var newTable = document.createElement('table')
        var tbody = document.createElement('tbody')

        newTable.appendChild(tbody)
        var skillRow = document.createElement('tr');
        skillRow.className = "update-portfolio-form-row"
        skillRow.innerHTML = `
            <td>Skill</td>
            <td><input name='skill' placeholder="Enter your skill"></input></td>
        `

        var skillBox = skillRow.querySelector('input[name="skill"]');
        skillBox.addEventListener('change', skillChangeHandler);

        tbody.appendChild(skillRow)
        var plusIconRow = document.getElementById('skills');
        plusIconRow.parentNode.insertBefore(newTable, plusIconRow);

        setSkills([
            ...skills,
            newSkill
        ])
    }

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = () => {
        const newUser = {
            ...user,
            contact: userContact,
            experiences: userExperienceArray,
            projects: projectsArray,
            skills: skills
        }
    }
    
    return (
        <span>

            <div className='update-portfoilo-form'>
                <h3 className='update-portfolio-form-heading'>Portfolio Form</h3>
                <div className='update-portfolio-form-container'>
   
                    <div className='section-container'>
                        <label>About</label>
                    </div>
                    <table width={600}>
                        <tbody>
                            <tr className='update-portfolio-form-row'>
                                <td>Full name</td>
                                <td><input name='fullname' onChange={changeHandler} placeholder="Enter your fullname"/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>About me</td>
                                <td><textarea name='aboutMe' onChange={changeHandler} placeholder="Enter about your profile summary"></textarea></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='section-container'>
                        <label>Experiences</label>
                        <img className='plus-icon' onClick={addExperienceSection} src={PLUSICON} alt='add new'/>
                    </div>
                    <div id='experiences'></div>

                    <div className='section-container'>
                        <label>Projects</label>
                        <img className='plus-icon' onClick={addProjectSection} src={PLUSICON} alt='add new'/>
                    </div>
                    <div id='projects'></div>

                    <div className='section-container'>
                        <label>Skills</label>
                        <img className='plus-icon' onClick={addSkillsSection} src={PLUSICON} alt='add new'/>
                    </div>
                    <div id='skills'></div>

                    <div className='section-container'>
                        <label>Contact</label>
                    </div>
                    <table width={600}>
                        <tbody>
                            <tr className='update-portfolio-form-row'>
                                <td>Address</td>
                                <td><textarea name='address' onChange={contactChangeHandler} placeholder="Enter your present address"></textarea></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Email</td>
                                <td><input name='email' onChange={changeHandler} placeholder='Enter your email'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Facebook</td>
                                <td><input name='facebook' onChange={contactChangeHandler} placeholder='Enter your facebook profile url'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Twitter</td>
                                <td><input name='twitter' onChange={contactChangeHandler} placeholder='Enter your twitter profile url'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Instagram</td>
                                <td><input name='instagram' onChange={contactChangeHandler} placeholder='Enter your instagram profile url'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td align='right' colSpan={2}><button onClick={handleSubmit}>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div className='update-portfolio-dashboard'>
                <div className='update-portfolio-container'>
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
                        userExperienceArray && userExperienceArray.map((eachExperience, index) => index !== 0 && <div key={eachExperience.companyName}><div className='company-experience'>
                            <span className='company-name'>{eachExperience.companyName}</span>
                            <span className='company-years'>{eachExperience.joinedAt} - {eachExperience.workedTill}</span>
                        </div>
                        <div>
                            <p className='project-title'>{eachExperience.projectName}</p>
                            <p className='project-description'>{eachExperience.projectDescription}</p>
                            <p className='roles-and-responsibilities'>Roles and Responsiblities</p>
                            <ReactMarkdown>{eachExperience.rolesAndResponsibilities}</ReactMarkdown>
                        </div></div>)
                       } 
                        <div className='company-experience'>
                            <span className='company-name'>{userExperience.companyName}</span>
                            <span className='company-years'>{userExperience.joinedAt} - {userExperience.workedTill}</span>
                        </div>
                        <div>
                            <p className='project-title'>{userExperience.projectName}</p>
                            <p className='project-description'>{userExperience.projectDescription}</p>
                            <p className='roles-and-responsibilities'>Roles and Responsiblities</p>
                            <ReactMarkdown>{userExperience.rolesAndResponsibilities}</ReactMarkdown>
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
                    {
                        projectsArray && projectsArray.map((eachProject, index) => index !== 0 && <div>
                            <p className='project-title'>{eachProject.projectName}</p>
                            <p className='project-description'>{eachProject.projectDescription}</p>
                        </div>)
                    }
                        <div>
                            <p className='project-title'>{project.projectName}</p>
                            <p className='project-description'>{project.projectDescription}</p>
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
                                <span className='skill-container'>{newSkill}</span>
                            {
                            skills && skills.map((eachSkill, index) => index !== 0 && <span className='skill-container' key={index}>{eachSkill}</span>
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
                            <div className='address-container'>
                                <p className='address-heading'>Address:</p>
                                <div className='address-content'>{userContact.address}</div>
                            </div>
                            <div>
                                <p className='address-heading'>Email: </p>
                                <div className='address-content'>{user.email}</div>
                                <div className='social-container'>
                                    <a href={userContact.instagram}><img src={INSTAGRAM} alt='Instagram'/></a>
                                    <a href={userContact.twitter}><img src={TWITTER} alt='Twitter'/></a>
                                    <a href={userContact.facebook}><img src={FACEBOOK} alt='Facebook'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </span>
    )
}

export default UpdateDashboard