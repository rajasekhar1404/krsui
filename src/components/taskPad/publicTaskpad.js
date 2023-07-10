import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { findTaskpadById } from "../apis/taskpadRequest"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const PublicTaskpad = () => {

    const { id } = useParams()
    const [currentTaskpad, setCurrentTaskpad] = useState({})

    useEffect(() => {
        findTaskpadById(id).then(json => setCurrentTaskpad(json))
    }, [])

    return (
        <div className="text-area">
            <ReactMarkdown>{currentTaskpad.content}</ReactMarkdown>
        </div>
    )
}

export default PublicTaskpad