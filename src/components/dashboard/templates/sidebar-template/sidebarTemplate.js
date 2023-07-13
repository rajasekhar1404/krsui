import './Sidebar.css';
import USERPHOTO from '../../../../static/user-profilephoto.png'

const SidebarTemplate = () => {
    return (
        <span className="t2">
            <div className='t2-navigator'>
                <div className='t2-profile'>
                    <img src={USERPHOTO} width={120} alt='profile'/>
                    <h4>FULL NAME</h4>
                </div>
                <div className='t2-sections'>
                    <a href='#Home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#Experience'>Experiences</a>
                    <a href='#Edication'>Educations</a>
                    <a href='#Projects'>Projects</a>
                    <a href='#Skills'>Skills</a>
                    <a href='#Blogs'>Blogs</a>
                    <a href='#Contact'>Contact</a>
                </div>
            </div>
            <div>
                <h1>Home</h1>
                <h1 id='about'>About</h1>
                <h1>Experiences</h1>
                <h1>Educations</h1>
                <h1>Projects</h1>
                <h1>Skills</h1>
                <h1>Blogs</h1>
                <h1>Contact</h1>
            </div>
        </span>
    )
}

export default SidebarTemplate