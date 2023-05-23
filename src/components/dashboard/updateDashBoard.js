import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import KRSLOGO from '../../static/user-profilephoto.png'
import INSTAGRAM from '../../static/instagram.png'
import TWITTER from '../../static/twitter.png'
import FACEBOOK from '../../static/facebook.png'
import PLUSICON from '../../static/plus.png'

const UpdateDashboard = () => {

    const user = {
        fullname: "FULL NAME",
        username: "username",
        email: "contact@gmail.com",
        password: "password",
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
        }
    }

    const addExperienceSection = () => {

        var newTable = document.createElement('table')
        var tbody = document.createElement('tbody')

        newTable.appendChild(tbody)

        var companyNameRow = document.createElement('tr');
        companyNameRow.className = "update-portfolio-form-row"
        companyNameRow.innerHTML = `
          <td>Company name</td>
          <td><input placeholder="Enter your company name"/></td>
        `;
        tbody.appendChild(companyNameRow);

        var joinedAtRow = document.createElement('tr');
        joinedAtRow.className = "update-portfolio-form-row"
        joinedAtRow.innerHTML = `
          <td>Joined at</td>
          <td><input type='date'/></td>
        `;
        tbody.appendChild(joinedAtRow);

        var relievedAtRow = document.createElement('tr');
        relievedAtRow.className = "update-portfolio-form-row"
        relievedAtRow.innerHTML = `
          <td>Relieved at</td>
          <td><input type='date'/></td>
        `;
        tbody.appendChild(relievedAtRow);

        var projectNameRow = document.createElement('tr');
        projectNameRow.className = "update-portfolio-form-row"
        projectNameRow.innerHTML = `
          <td>Project name</td>
          <td><input placeholder='Enter your project name'/></td>
        `;
        tbody.appendChild(projectNameRow);

        var projectDescriptionRow = document.createElement('tr');
        projectDescriptionRow.className = "update-portfolio-form-row"
        projectDescriptionRow.innerHTML = `
          <td>Project description</td>
          <td><textarea placeholder="Enter your project description"></textarea></td>
        `;
        tbody.appendChild(projectDescriptionRow);

        var rolesResponsibilitiesRow = document.createElement('tr');
        rolesResponsibilitiesRow.className = "update-portfolio-form-row"
        rolesResponsibilitiesRow.innerHTML = `
          <td>Roles & responsibilities</td>
          <td><textarea placeholder="Enter your project roles & responsibilities"></textarea></td>
        `;
        tbody.appendChild(rolesResponsibilitiesRow);


        var plusIconRow = document.getElementById('experiences');
        plusIconRow.parentNode.insertBefore(newTable, plusIconRow);
    }

    const addProjectSection = () => {
        var newTable = document.createElement('table')
        var tbody = document.createElement('tbody')

        newTable.appendChild(tbody)

        var projectNameRow = document.createElement('tr');
        projectNameRow.className = "update-portfolio-form-row"
        projectNameRow.innerHTML = `
            <td>Project name</td>
            <td><input placeholder='Enter your project name'/></td>
        `

        var projectDescriptionRow = document.createElement('tr');
        projectDescriptionRow.className = "update-portfolio-form-row"
        projectDescriptionRow.innerHTML = `
            <td>Project description</td>
            <td><textarea placeholder="Enter your project description"></textarea></td>
        `

        tbody.appendChild(projectNameRow)
        tbody.appendChild(projectDescriptionRow)

        var plusIconRow = document.getElementById('projects');
        plusIconRow.parentNode.insertBefore(newTable, plusIconRow);
    }

    const addSkillsSection = () => {
        var newTable = document.createElement('table')
        var tbody = document.createElement('tbody')

        newTable.appendChild(tbody)
        var skillRow = document.createElement('tr');
        skillRow.className = "update-portfolio-form-row"
        skillRow.innerHTML = `
            <td>Skill</td>
            <td><input placeholder="Enter your skill"></input></td>
        `

        tbody.appendChild(skillRow)
        var plusIconRow = document.getElementById('skills');
        plusIconRow.parentNode.insertBefore(newTable, plusIconRow);
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
                                <td><input placeholder="Enter your fullname"/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>About me</td>
                                <td><textarea placeholder="Enter about your profile summary"></textarea></td>
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
                                <td><textarea placeholder="Enter your present address"></textarea></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Email</td>
                                <td><input placeholder='Enter your email'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Facebook</td>
                                <td><input placeholder='Enter your facebook profile url'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Twitter</td>
                                <td><input placeholder='Enter your twitter profile url'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td>Instagram</td>
                                <td><input placeholder='Enter your instagram profile url'/></td>
                            </tr>
                            <tr className='update-portfolio-form-row'>
                                <td align='right' colSpan={2}><button>Submit</button></td>
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
                                <div className='address-content'>{user.email}</div>
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
        </span>
    )
}

export default UpdateDashboard