import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import TaskpadHeader from "./header"
import { findAllTaskpadTitlesAndIds, findTaskpadById, updateTaskpad } from "../apis/taskpadRequest"
import { ToastContainer, toast } from "react-toastify"

const TaskPad = () => {

    const [titles, setTitles] = useState([])
    const [currentTaskpad, setCurrentTaskpad] = useState({})
    const [isEditing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function findAll() {
            const allTitles = await findAllTaskpadTitlesAndIds()
            setTitles(allTitles)
        }
        findAll()
        handleCurrentTaskpad()
    }, [titles.length])

    const handleCurrentTaskpad = async (e, prev, next) => {
        if (titles.length <= 0) return
        setLoading(prev => !prev)
        if (e) {
            let taskpadId = e.target.value.split(':')[0].trim()
            findTaskpadById(taskpadId).then(data => setCurrentTaskpad(data)).then(() => setLoading(prev => !prev))
        } else {
            if (!currentTaskpad.title) {
                findTaskpadById(titles[0].taskpadId).then(data => setCurrentTaskpad(data)).then(() => setLoading(prev => !prev))
                return
            }
            let currentId = Number.parseInt(currentTaskpad.taskpadId.split(':')[0].trim().substring(3))
            if (prev) {
                let prevTaskpad = titles.filter(each => Number.parseInt(each.taskpadId.split(':')[0].trim().substring(3))  < currentId)
                findTaskpadById(prevTaskpad[0].taskpadId).then(data => setCurrentTaskpad(data)).then(() => setLoading(prev => !prev))
                return
            }
            if (next) {
                let nextTaskpad = titles.filter(each => Number.parseInt(each.taskpadId.split(':')[0].trim().substring(3))  > currentId)
                findTaskpadById(nextTaskpad[nextTaskpad.length - 1].taskpadId).then(data => setCurrentTaskpad(data)).then(() => setLoading(prev => !prev))
                return
            }
        }
    }

    const changeHandler = (e) => {
        if (e.target.name === 'isPublic') {
            setCurrentTaskpad(prev => ({
                ...prev,
                [e.target.name]: e.target.checked
            }))
            return 
        }
        setCurrentTaskpad({
            ...currentTaskpad,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = async () => {
        if (isEditing) {
            const response = await updateTaskpad(currentTaskpad)
            response && setEditing(!isEditing)
            toast.success(response.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } else {
            setEditing(!isEditing)
        }
    }

    const handleAddTimeStamp = () => {
        setCurrentTaskpad({content : currentTaskpad.content + ` \n---\n###### _${new Date().toLocaleString()}_\n---\n`})
    }

    return (
        <div>
            <TaskpadHeader 
                titles={titles} 
                setTitles={setTitles}
                handleCurrentTaskpad={handleCurrentTaskpad} 
                currentTaskpad={currentTaskpad}
                isEditing={isEditing}
                handleSave={handleSave}
                changeHandler={changeHandler}
                loading={loading}
            />
            {
                isEditing ? <textarea className="text-area"
                    name="content"
                    value={currentTaskpad.content}
                    placeholder="Enter your content here"
                    onChange={changeHandler}
                    ></textarea> : <div
                     className="text-area">
                    <ReactMarkdown>{currentTaskpad.content}</ReactMarkdown>
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default TaskPad