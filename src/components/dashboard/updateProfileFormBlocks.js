import { ExperienceBlock, ProjectBlock, SkillsBlock } from "../utils/userPortfolioBlocks"
import PLUSICON from '../../static/plus.png'

export const AboutFormBlock = ({ fullname, aboutMe, changeHandler, setUserPhoto }) => {
    return (
        <>
            <div className='section-container'>
                <label>About</label>
            </div>
            <table width={600}>
                <tbody>
                    <tr className='update-portfolio-form-row'>
                        <td>Full name</td>
                        <td><input name='fullname' value={fullname} onChange={changeHandler} placeholder="Enter your fullname"/></td>
                    </tr>
                    <tr className='update-portfolio-form-row'>
                        <td>About me</td>
                        <td><textarea name='aboutMe' value={aboutMe} onChange={changeHandler} placeholder="Enter about your profile summary"></textarea></td>
                    </tr>
                    <tr className='update-portfolio-form-row'>
                        <td>Profile Photo</td>
                        <td>
                            <input 
                                type='file'
                                name="profilePhoto"
                                onChange={(e) => {
                                    let file = e.target.files[0]
                                    let reader = new FileReader()
                                    reader.readAsDataURL(file)
                                    reader.onload = () => {
                                        setUserPhoto(prev => reader.result)
                                    }
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export const ExperienceFormBlock = ({ user, removeExperience, addAnotherExperience, setUser }) => {
    return (
        <>
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
        </>
    )
}

export const ProjectFormBlock = ({ user, removeProject, addProjectSection, setUser }) => {
    return (
        <>
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
        </>
    )
}

export const SkillsFormBlock = ({ user, setUser, removeSkill, addSkillsSection }) => {
    return (
        <>
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
        </>
    )
}

export const ContactFormBlock = ({ user, changeHandler }) => {
    return (
        <>
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
                </tbody>
            </table>
        </>
    )
}

export const PasswordUpdateForm = ({ changeHandler }) => {
    return (
        <>
            <div className='section-container'>
                <label>Update password</label>
            </div>
            <table>
                <tbody>
                    <tr className='update-portfolio-form-row'>
                        <td>Old password</td>
                        <td>
                            <input 
                                name="oldPassword"
                                type="password"
                                placeholder="Old password"
                                onChange={changeHandler}
                            />
                        </td>
                    </tr>
                    <tr className='update-portfolio-form-row'>
                        <td>New password</td>
                        <td>
                            <input 
                                name="newPassword"
                                type="password"
                                placeholder="New password"
                                onChange={changeHandler}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}