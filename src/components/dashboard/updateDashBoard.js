import { useEffect, useState } from 'react'
import { LOGGEDINUSER, PROFILE_PHOTO } from '../apis/taskApis'
import { OK } from '../utils/constants'
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from '../utils/userPortfolioBlocks'
import { AboutFormBlock, ContactFormBlock, ExperienceFormBlock, PasswordUpdateForm, ProjectFormBlock, SkillsFormBlock } from './updateProfileFormBlocks'
import { updateUserPhoto, updateUserProfile } from '../apis/userRequests'

const UpdateDashboard = ({setUpdateDashboard}) => {

    const initialUser = {
        fullname: "",
        username: "",
        email: "",
        aboutMe: "",
        experiences: [],
        projects: [],
        skills : [],
        contact: {},
        oldPassword: "",
        newPassword: "",
        isPublic: false
    }
   
    const [user, setUser] = useState(initialUser)
    const [userPhoto, setUserPhoto] = useState("")

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
            setUser(prev => ({
                ...prev,
                ...data
            }))
            getProfilePhoto()
        }
    }

    const getProfilePhoto = async () => {
        const response = await fetch(PROFILE_PHOTO, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('key')}`
            }
        })

        const data = await response.json()
        setUserPhoto(prev => data.profilePhoto)
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

        const response = await updateUserProfile(user)
        await updateUserPhoto(userPhoto)

        if (response.status === OK) {
            setUpdateDashboard(false)
        }

        
    }

    return (
        <span>

            <div className='update-portfoilo-form'>
                <h3 className='update-portfolio-form-heading'>Portfolio Form</h3>
                <div className='update-portfolio-form-container'>
   
                    <AboutFormBlock fullname={user.fullname} aboutMe={user.aboutMe} changeHandler={changeHandler} setUserPhoto={setUserPhoto}/>

                    <ExperienceFormBlock user={user} removeExperience={removeExperience} addAnotherExperience={addAnotherExperience} setUser={setUser}/>

                    <ProjectFormBlock user={user} removeProject={removeProject} addProjectSection={addProjectSection} setUser={setUser}/>

                    <SkillsFormBlock user={user} setUser={setUser} removeSkill={removeSkill} addSkillsSection={addSkillsSection}/>

                    <ContactFormBlock user={user} changeHandler={changeHandler}/>

                    <PasswordUpdateForm changeHandler={changeHandler} />

                    <table>
                        <tbody>
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
                <AboutMeHolder fullname={user.fullname} aboutMe={user.aboutMe} profilePhoto={userPhoto}/>
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