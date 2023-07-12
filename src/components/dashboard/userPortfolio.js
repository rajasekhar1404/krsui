import { useParams } from "react-router-dom"
import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from "../utils/userPortfolioBlocks"
import { useEffect, useState } from "react"
import { findUserByEmail } from "../apis/userRequests"
import ErrorPage from "../utils/errorpage"
import LoadingSpinner from "../utils/LoadingSpinner"
import TaskpadList from "../taskPad/taskPadList"
import { findAllPublicTaskpadTitlesAndIds } from "../apis/taskpadRequest"

const UserPortfolio = () => {

    const { email } = useParams()
    const [isLoading, setLoading] = useState(false)
    const [titles, setTitles] = useState([])

    const [user, setUser] = useState({})

    useEffect(() => {
        async function setPortfolio() {
            setLoading(prev => !prev)
            const user = await findUserByEmail(email)
            setUser(user)
            const publicTaskpads = await findAllPublicTaskpadTitlesAndIds(email)
            setTitles(publicTaskpads)
            setLoading(prev => !prev)
        }
        setPortfolio()
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
                    <TaskpadList email={email} titles={titles}/>
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