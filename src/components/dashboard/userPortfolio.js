import { useParams } from "react-router-dom"
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from "../utils/userPortfolioBlocks"
import { useEffect, useState } from "react"
import { findUserByEmail } from "../apis/userRequests"
import ErrorPage from "../utils/errorpage"
import LoadingSpinner from "../utils/LoadingSpinner"

const UserPortfolio = () => {

    const { email } = useParams()
    const [isLoading, setLoading] = useState(false)

    const [user, setUser] = useState({})

    useEffect(() => {
        setLoading(prev => !prev)
        findUserByEmail(email).then(res => res.json()).then(json => setUser(json)).then(() => setLoading(false))
    }, [email])

    const { fullname, aboutMe, profilePhoto, experiences, projects, skills, contact } = user
    return (
        <div className='portfolio-dashboard'>
            {
                isLoading && <LoadingSpinner />
            }
            {
                user && user.email && <div className="portfolio-popup">
                    <AboutMeHolder fullname={fullname} aboutMe={aboutMe} profilePhoto={profilePhoto} />
                    <ExperienceHolder experiences={experiences}/>
                    <ProjectHolder projects={projects}/>
                    <SkillHolder skills={skills}/>
                    <ContactHolder contact={contact} email={email}/>
                </div>
            }
            {
                !isLoading && !user.email && <ErrorPage />
            }
        </div>
    )
}

export default UserPortfolio