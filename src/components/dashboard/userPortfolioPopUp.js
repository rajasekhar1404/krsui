import { AboutMeHolder, ContactHolder, ExperienceHolder, ProjectHolder, SkillHolder } from "../utils/userPortfolioBlocks"

const UserPortfolioPopUp = ({ user }) => {

    if (!user) return

    const {fullname, aboutMe, profilePhoto, experiences, projects, skills, contact, email} = user
    return (
        <div className="portfolio-popup">
            <AboutMeHolder fullname={fullname} aboutMe={aboutMe} profilePhoto={profilePhoto} />
            <ExperienceHolder experiences={experiences}/>
            <ProjectHolder projects={projects}/>
            <SkillHolder skills={skills}/>
            <ContactHolder contact={contact} email={email}/>
        </div>
    )
}

export default UserPortfolioPopUp