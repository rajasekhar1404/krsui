import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../static/box-arrow-left.svg'

const Logout = ({setActive }) => {

    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.clear();
        setActive(false)
        navigate("/")
    }

    return (
        <div title='logout'>
            <img src={LogoutIcon} alt='Logout' onClick={logoutHandler}/>
        </div>
    )
}

export default Logout