import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import KRSLOGO from '../../static/user-profilephoto.png'
import INSTAGRAM from '../../static/instagram.png'
import TWITTER from '../../static/twitter.png'
import FACEBOOK from '../../static/facebook.png'

const PublicDashboard = () => {

    const content = {
        description : "- Aliquam tincidunt mauris eu risus.\n- Aliquam tincidunt mauris eu risus.\n- Nunc dignissim risus id metus.\n- Cras ornare tristique elit."
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
                    <button>Sign up</button>
                    <button>Sign in</button>
                </span>
            </section>
            <div className='portfolio-container'>
            <section>
                <div className='user-header'>
                    <img  className='profile-photo' src={KRSLOGO} alt="Profile" />
                    <label className='dashboard-username'>FULL NAME</label>
                </div>    
            </section>
            <section>
                <div>
                    <div className='section-wrapper'>
                        <div className='section-type'>
                            ABOUT ME
                        </div>
                    </div>
                    <p className='about-content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
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
                        <span className='company-name'>krs private limited</span>
                        <span className='company-years'>2020 - till now</span>
                    </div>
                    <div>
                        <p className='project-title'>Project name</p>
                        <p className='project-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='roles-and-responsibilities'>Roles and Responsiblities</p>
                        <ReactMarkdown>{content.description}</ReactMarkdown>
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
                        <p className='project-title'>Project name</p>
                        <p className='project-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <p className='project-title'>Project name</p>
                        <p className='project-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                            <span className='skill-container'>
                                java
                            </span>
                            <span className='skill-container'>
                                node js
                            </span>
                            <span className='skill-container'>
                                spring
                            </span>
                            <span className='skill-container'>
                                node js
                            </span>
                            <span className='skill-container'>
                                react js
                            </span>
                            <span className='skill-container'>
                                mongodb is another
                            </span>
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
                            <div className='address-content'>H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.H-no: 2-40, bikkumalla, noothankal, suryapet, 508221.</div>
                        </div>
                        <div>
                            <p className='address-heading'>Email: </p>
                            <div className='address-content'>contact@gmail.com</div>
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