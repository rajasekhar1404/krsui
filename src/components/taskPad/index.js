import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import TaskpadHeader from "./header"
import { findAllTaskpadTitlesAndIds, findTaskpadById, updateTaskpad } from "../apis/taskpadRequest"
import { ToastContainer, toast } from "react-toastify"

const TaskPad = () => {

    const [titles, setTitles] = useState([])
    const [currentTaskpad, setCurrentTaskpad] = useState({})
    const [isEditing, setEditing] = useState(false)

    useEffect(() => {
        async function testing() {
            const allTitles = await findAllTaskpadTitlesAndIds()
            setTitles(allTitles)
        }
        testing()
        handleCurrentTaskpad()
    }, [titles.length])

    let total = 0;
    let current = 0;
    const handleCurrentTaskpad = async (e, inc, dec) => {
        if (titles.length <= 0) return
        if (e) {
            let taskpadId = e.target.value.split(':')[0].trim()
            findTaskpadById(taskpadId).then(data => setCurrentTaskpad(data))
        } else {
            total = titles.length
            if (inc && current <= total) {
                current = current + 1
                const data = await findTaskpadById(titles[current].taskpadId)
                data && setCurrentTaskpad(data)
            } else if (dec && current > 0 ) {
                current = current - 1
                const data = await findTaskpadById(titles[current].taskpadId)
                data && setCurrentTaskpad(data)
            } else {
                findTaskpadById(titles[0].taskpadId).then(data => setCurrentTaskpad(data))
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
                handleCurrentTaskpad={handleCurrentTaskpad} 
                currentTaskpad={currentTaskpad}
                isEditing={isEditing}
                handleSave={handleSave}
                changeHandler={changeHandler}
                current={current}
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