import LoadingSpinner from '../../../utils/LoadingSpinner'
import { AboutMeHolder, ExperienceHolder, ProjectHolder, SkillHolder, ContactHolder,  } from '../../../utils/userPortfolioBlocks'
import TaskpadList from '../../../taskPad/taskPadList'
import ErrorPage from '../../../utils/errorpage'

const DefaultTemplate = ({ user, titles, isLoading, email }) => {

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

export default DefaultTemplate