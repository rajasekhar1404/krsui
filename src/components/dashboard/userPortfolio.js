import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { findUserByEmail } from "../apis/userRequests"
import { findAllPublicTaskpadTitlesAndIds } from "../apis/taskpadRequest"
import DefaultTemplate from './templates/default/defaultTempalte'
import SidebarTemplate from "./templates/sidebar-template/sidebarTemplate"

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

    const templates = new Map()
    templates.set('default', <DefaultTemplate user={user} titles={titles} isLoading={isLoading} email={email} />)
    templates.set('sidebar-template', <SidebarTemplate user={user} titles={titles} isLoading={isLoading} email={email} />)

    return (
        <>
            {
                templates.get( email === 'rajasekhar.k@nexwave.in' ? 'sidebar-template' : 'default')
            }
        </>
    )
}

export default UserPortfolio