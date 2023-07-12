import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { findAllPublicTaskpadTitlesAndIds, findPublicTaskpad } from "../apis/taskpadRequest"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import PublicTaskpadHeader from "./publicTaskpadHeader"
import ErrorPage from "../utils/errorpage"

const PublicTaskpad = () => {

    const { email, id } = useParams()
    const [currentTaskpad, setCurrentTaskpad] = useState({})
    const [titles, setTitles] = useState([])
    const [isNotFound, setNotFound] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        async function getData() {
            setLoader(true)
            const publicTaskpads = await findAllPublicTaskpadTitlesAndIds(email)
            setTitles(publicTaskpads)
            const data = await findPublicTaskpad( email, id )
            if (!data) setNotFound(true)
            else {
                setNotFound(false)
                setCurrentTaskpad(data)
            }
            setLoader(false)
        }
        getData()
    }, [id, email])

    const navigate = useNavigate()

    const handleCurrentTaskpad = async (e, prev, next) => {
        if (e) return findTaskpad(e.target.value.split(':')[0].trim())                                              // when onchange happned, getting the id from the title
        let currentId = Number.parseInt(currentTaskpad.taskpadId.substring(3))                                      // extracting current Taskpad id for next, prev operatiions
        if (prev) {
            let prevTaskpad = titles.filter(each => Number.parseInt(each.taskpadId.substring(3))  < currentId)      // searching all the taskpads having id lesser than current id
            return prevTaskpad.length > 0 && findTaskpad(prevTaskpad[0].taskpadId)
        }
        if (next) {
            let nextTaskpad = titles.filter(each => Number.parseInt(each.taskpadId.substring(3))  > currentId)      // searching all the taskpads having id greater than current id
            return nextTaskpad.length > 0 && findTaskpad(nextTaskpad[nextTaskpad.length - 1].taskpadId)
        }
    }

    const findTaskpad = async (id) => {
        navigate('/taskpad/' + email + "/" + id)
    }

    return (
        <div className='portfolio-dashboard'>
            <PublicTaskpadHeader 
                titles={titles}
                setTitles={setTitles}
                currentTaskpad={currentTaskpad}
                handleCurrentTaskpad={handleCurrentTaskpad}
                loader={loader}
            />
            {
                isNotFound ? <ErrorPage /> : <div className="text-area-public">
                    <ReactMarkdown>{currentTaskpad.content}</ReactMarkdown>
                </div>
            }
        </div>
    )
}

export default PublicTaskpad