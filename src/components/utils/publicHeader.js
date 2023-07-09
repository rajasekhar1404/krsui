import { useState } from "react";
import { Link } from "react-router-dom";
import KRSLOGO from '../../static/title.svg'

const PublicHeader = () => {

    const [email, setEmail] = useState("")

	const handleChange = (e) => {
		setEmail(e.target.value);
	}

    return (
        <div className='portfolio-dashboard'>
            <section className="dashboard-header">
                <span className='dashboard-logo'>
                    <Link to={"/"}><img src={KRSLOGO} alt='krslogo'/></Link>
                </span>
                <span className='search-wrapper'>
                    <input placeholder="Enter email" value={email} onChange={handleChange}/>
                    <Link to={"/user/" + email} onClick={() => setEmail('')}><button>Search</button></Link>
                </span>
                <span className='login-wrapper'>
                    <Link to={"/signup"}><button>Sign up</button></Link>
                    <Link to={"/login"}><button>Sign in</button></Link>
                </span>
            </section>
        </div>
    )
}

export default PublicHeader