import KRSLOGO from '../../static/title.svg'
import { users } from '../db/users'
import PORTFOLIO_SC_1 from '../../static/portfolio_sc_1.png'
import PORTFOLIO_SC_2 from '../../static/portfolio_sc_2.png'
import TASKPAD_SC_1 from '../../static/taskpad_sc_1.png'
import TASKPAD_SC_2 from '../../static/taskpad_sc_2.png'
import TASKS_SC_1 from '../../static/tasks_sc_1.png'
import TASKS_SC_2 from '../../static/tasks_sc_2.png'
import LOGIN_SC_1 from '../../static/login.png'
import REGISTER_SC_1 from '../../static/register.png'
import HOME_SC_1 from '../../static/homepage.png'
import TASKS_OF_THE_DAY_SC_1 from '../../static/tasks_of_the_day.png'
import TASKS_MOBILE_SC_1 from '../../static/tasks.png'
import CREATE_TASK_SC_1 from '../../static/create_task.png'
import TASK_PAD_SC_1 from '../../static/taskpad_view.png'
import TASK_PAD_SC_2 from '../../static/taskpad_edit.png'

const PublicDashboard = ({ setSignup, setLogin }) => {

    const user = users[0]
	const [email, setEmail] = useState("");

    const signupHandler = () => {
        setLogin(false)
        setSignup(true)
    }

    const signinHandler = () => {
        setSignup(false)
        setLogin(true)
    }

	const handleChange = (e) => {
		setEmail(e.target.value);
	}
	const handleSearch = () => {

	}

    return (
        <div className='portfolio-dashboard'>
            <section className="dashboard-header">
                <span className='dashboard-logo'>
                    <img src={KRSLOGO} alt='krslogo'/>
                </span>
                <span className='search-wrapper'>
                    <input placeholder="Enter username" onChange={handleChange}/>
                    <button
			onClick={handleSearch}
	    		>Search</button>
                </span>
                <span className='login-wrapper'>
                    <button onClick={signupHandler}>Sign up</button>
                    <button onClick={signinHandler}>Sign in</button>
                </span>
            </section>

            <div className="features">
                <div className="feature-section">
                    <div className="feature-section-header">
                        <h2>LET THE WORLD KNOW YOU BY CREATING A EASY PORTFOLIO</h2>
                    </div>
                    <div className="feature-body">
                        <img src={PORTFOLIO_SC_1} alt="portfolio_1" className="feature-screenshot" onClick={signupHandler}/>
                        <img src={PORTFOLIO_SC_2} alt="portfolio_2" className="feature-screenshot" onClick={signupHandler}/>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature-section-header">
                        <h2>MAINTAIN YOUR NOTES LIKE A PRO ACROSS MULTIPLE DEVICES</h2>
                    </div>
                    <div className="feature-body">
                        <img src={TASKPAD_SC_1} alt="portfolio_1" className="feature-screenshot" onClick={signupHandler}/>
                        <img src={TASKPAD_SC_2} alt="portfolio_2" className="feature-screenshot" onClick={signupHandler}/>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature-section-header">
                        <h2>FORGET ABOUT FORGETTING THE TASKS</h2>
                    </div>
                    <div className="feature-body">
                        <img src={TASKS_SC_1} alt="portfolio_1" className="feature-screenshot" onClick={signupHandler}/>
                        <img src={TASKS_SC_2} alt="portfolio_2" className="feature-screenshot" onClick={signupHandler}/>
                    </div>
                </div>
                <div className="feature-section">
                    <div className="feature-section-header">
                        <h2>MAINTAIN YOUR ECHOSYSTEM IN YOUR HAND</h2>
                    </div>
                    <div className="feature-body">
                    <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={LOGIN_SC_1} alt="portfolio_1" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={REGISTER_SC_1} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={HOME_SC_1} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={TASKS_OF_THE_DAY_SC_1} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={TASKS_MOBILE_SC_1} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={CREATE_TASK_SC_1} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={TASK_PAD_SC_1} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                        <a href='https://github.com/rajasekhar1404/krs-mobile-builds' target='_blank' rel="noreferrer"><img src={TASK_PAD_SC_2} alt="portfolio_2" className="feature-screenshot-mobile"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicDashboard
