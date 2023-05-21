import TaskLogo from '../static/card-checklist.svg'
import TitleLogo from '../static/title.svg'
import TaskPadLogo from '../static/journal-text.svg'
import { Link } from 'react-router-dom'
import Logout from './authentication/logout'

const NavigationBar = ({setActive}) => {

    return (
        <>
        <nav className="nav-bar">
            <Link to={'/'}><img title='Home' src={TitleLogo} alt="home"/></Link>
            <Link to={'/taskpad'}><img title='Task pad' src={TaskPadLogo} alt="task pad" /></Link>
            <Link to={'/tasks'}><img title='Tasks' src={TaskLogo} alt="tasks"/></Link>
        </nav>
        <div className='logoutContainer'>
            <Logout setActive={setActive} />
        </div>
        </>
    )
}

export default NavigationBar;