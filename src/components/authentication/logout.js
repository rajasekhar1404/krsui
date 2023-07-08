import LogoutIcon from '../../static/box-arrow-left.svg'

const Logout = ({setActive }) => {

    const logoutHandler = () => {
        localStorage.clear();
        setActive(false)
    }

    return (
        <div title='logout'>
            <img src={LogoutIcon} alt='Logout' onClick={logoutHandler}/>
        </div>
    )
}

export default Logout