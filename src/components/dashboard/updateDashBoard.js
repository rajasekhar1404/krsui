import PLUSICON from '../../static/plus.png'
import { useEffect, useState } from 'react'
import { LOGGEDINUSER, UPDATE_USER } from '../apis/taskApis'
import { OK } from '../utils/constants'
import { AboutMeHolder, ContactHolder, ExperienceBlock, ExperienceHolder, ProjectBlock, ProjectHolder, SkillHolder, SkillsBlock } from '../utils/userPortfolioBlocks'

const UpdateDashboard = ({setUpdateDashboard}) => {

    const initialUser = {
        fullname: "",
        username: "",
        profilePhoto: "",
        email: "",
        password: "",
        aboutMe: "",
        experiences: [],
        projects: [],
        skills : [],
        contact: {},
        isPublic: false
    }
   
    const [user, setUser] = useState(initialUser)

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

        if (response.status === OK) {
            const data = await response.json()
            setUser(data)
        }
    }

    const removeProject = () => {

        let lastProjectRemoved = user.projects.filter(proj => proj.count !== user.projects.length)

        setUser({
            ...user,
            projects: lastProjectRemoved
        })
    }

    const addAnotherExperience = () => {
        setUser({
            ...user,
            experiences: [
                ...user.experiences,
                {
                    count: user.experiences.length + 1,
                    companyName: "",
                    joinedAt: "",
                    workedTill: "till date",
                    projectName: "",
                    projectDescription: "",
                    rolesAndResponsibilities: ""
                }
            ]
        })
    }

    const removeExperience = () => {

        let lastExperienceRemoved = user.experiences.filter(exp => exp.count !== user.experiences.length)

        setUser({
            ...user,
            experiences: lastExperienceRemoved
        })
    }

    const addProjectSection = () => {
        setUser({
            ...user,
            projects: [
                ...user.projects,
                {
                    count: user.projects.length + 1,
                    projectName: "",
                    projectDescription: ""
                }
            ]
        })
    }

    const addSkillsSection = () => {
        setUser({
            ...user,
            skills: [
                ...user.skills,
                {
                    count: user.skills.length + 1,
                    skill: ""
                }
            ]
        })
    }

    const removeSkill = () => {

        let lastSkillRemoved = user.skills.filter(eachSkill => eachSkill.count !== user.skills.length)

        setUser({
            ...user,
            skills: lastSkillRemoved
        })
    }

    const changeHandler = (e) => {

        if (e.target.name === "profilePhoto") {
            let file = e.target.files[0]
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setUser({
                    ...user,
                    profilePhoto: reader.result
                })
            }
            return
        }

        if (e.target.id.startsWith("contact")) {
            setUser({
                ...user,
                contact: {
                    ...user.contact,
                    [e.target.name]:e.target.value
                }
            })
            return
        }

        if (e.target.name === "isPublic") {
            setUser({
                ...user,
                [e.target.name]:e.target.checked
            })
            return
        }
            setUser({
                ...user,
                [e.target.name]:e.target.value
            })
    }

    const handleSubmit = async () => {

        const response = await fetch(UPDATE_USER, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('key')}`
            },
            body: JSON.stringify(user)
        })

        if (response.status === OK) {
            setUpdateDashboard(false)
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
                                <td><input name='fullname' value={user.fullname} onChange={changeHandler} placeholder="Enter your fullname"/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>About me</td>
                                <td><textarea name='aboutMe' value={user.aboutMe} onChange={changeHandler} placeholder="Enter about your profile summary"></textarea></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Profile Photo</td>
                                <td>
                                    <input 
                                        type='file'
                                        name="profilePhoto"
                                        onChange={changeHandler}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='section-container'>
                        <label>Experiences</label>
                        <img className='plus-icon' onClick={removeExperience} src={PLUSICON} alt='add new'/>
                        <img className='plus-icon' onClick={addAnotherExperience} src={PLUSICON} alt='add new'/>
                    </div>
                    <div>
                        {
                            user.experiences.map((eachExperience, index) => <ExperienceBlock 
                                    key={index}
                                    user={user}
                                    setUser={setUser}
                                    eachExperience={eachExperience}
                                />
                            )
                        }
                    </div>

                    <div className='section-container'>
                        <label>Projects</label>
                        <img className='plus-icon' onClick={removeProject} src={PLUSICON} alt='add new'/>
                        <img className='plus-icon' onClick={addProjectSection} src={PLUSICON} alt='add new'/>
                    </div>
                    <div>
                        {
                            user.projects.map((eachProject, index) => <ProjectBlock
                                    key={index}
                                    user={user}
                                    setUser={setUser}
                                    eachProject={eachProject}
                                />
                            )
                        }
                    </div>

                    <div className='section-container'>
                        <label>Skills</label>
                        <img className='plus-icon' onClick={removeSkill} src={PLUSICON} alt='add new'/>
                        <img className='plus-icon' onClick={addSkillsSection} src={PLUSICON} alt='add new'/>
                    </div>
                    <div>
                        {
                            user.skills.map((eachSkill, index) => <SkillsBlock 
                                    key={index}
                                    user={user}
                                    setUser={setUser}
                                    eachSkill={eachSkill}
                                />
                            )
                        }
                    </div>

                    <div className='section-container'>
                        <label>Contact</label>
                    </div>
                    <table width={600}>
                        <tbody>
                            <tr className='update-portfolio-form-row'>
                                <td>Address</td>
                                <td>
                                    <textarea 
                                        id='contact-address'
                                        name='address' 
                                        value={user.contact.address} 
                                        onChange={changeHandler} 
                                        placeholder="Enter your present address"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Facebook</td>
                                <td>
                                    <input 
                                        id="contact-fb"
                                        name='facebook' 
                                        value={user.contact.facebook} 
                                        onChange={changeHandler} 
                                        placeholder='Enter your facebook profile url'
                                    />
                                </td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Twitter</td>
                                <td>
                                    <input 
                                        id="contact-twitter"
                                        name='twitter' 
                                        value={user.contact.twitter} 
                                        onChange={changeHandler} 
                                        placeholder='Enter your twitter profile url'
                                    />
                                </td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Instagram</td>
                                <td>
                                    <input 
                                        id="contact-insta"
                                        name='instagram' 
                                        value={user.contact.instagram} 
                                        onChange={changeHandler} 
                                        placeholder='Enter your instagram profile url'
                                    />
                                </td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Public</td>
                                <td>
                                    <input 
                                        name='isPublic'
                                        type='checkbox'
                                        checked={user.isPublic}
                                        onChange={changeHandler}
                                    />
                                </td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td><button onClick={() => setUpdateDashboard(false)}>Cancel</button></td>
                                <td align='right' colSpan={2}><button onClick={handleSubmit}>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div className='update-portfolio-dashboard'>
                <div className='update-portfolio-container'>
                <AboutMeHolder fullname={user.fullname} aboutMe={user.aboutMe} profilePhoto={user.profilePhoto}/>
                <ExperienceHolder experiences={user.experiences}/>
                <ProjectHolder projects={user.projects}/>
                <SkillHolder skills={user.skills}/>
                <ContactHolder contact={user.contact} email={user.email}/>
                </div>
            </div>
        </span>
    )
}

export default UpdateDashboard