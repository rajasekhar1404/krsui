import KRSLOGO from '../../static/title.svg'
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from '../utils/userPortfolioBlocks'
import { users } from '../db/users'

const PublicDashboard = ({ setSignup, setLogin }) => {

    const user = users[0]

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

            <div className="features">
                {/* <AboutMeHolder fullname={user.fullname} aboutMe={user.aboutMe}/>
                <ExperienceHolder experiences={user.experiences}/>
                <ProjectHolder projects={user.projects}/>
                <SkillHolder skills={user.skills}/>
                <ContactHolder contact={user.contact} email={user.email}/> */}

                <div className="feature-section">
                    <div className="feature-section-header">
                        <h2>LET THE WORLD KNOW YOU BY CREATING A EASY PORTFOLIO</h2>
                    </div>
                    <div className="feature-body">
                        images rolling
                    </div>
                </div>
                <div>
                    <div>
                        <h1>MAINTAIN YOUR NOTES LIKE A PRO ACROSS MULTIPLE DEVICES</h1>
                    </div>
                    <div>
                        images rolling
                    </div>
                </div>
                <div>
                    <div>
                        <h1>FORGET ABOUT FORGETTING THE TASKS</h1>
                    </div>
                    <div>
                        images rolling
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicDashboard