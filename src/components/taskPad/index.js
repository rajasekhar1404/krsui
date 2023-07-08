import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { GET_TASK_PAD_CONTENT, TASK_PAD_UPDATE } from "../apis/taskApis"
import EditIcon from '../../static/pencil-square.svg'
import SaveIcon from '../../static/journal-check.svg'
import TimeStampIcon from '../../static/calendar-plus.svg'
import TaskpadHeader from "./header"

const TaskPad = () => {

    const [text, setText] = useState({
        content : ''
    })
    const [isEditing, setEditing] = useState(false)

    useEffect(() => {
        getTaskPadContent()
    }, [])

    const getTaskPadContent = async () => {
        const response = await fetch(GET_TASK_PAD_CONTENT, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('key')}`
            }
        })
        const data = await response.json()
        if (data) {
            setText(data)
        }
    }

    const handleSave = async () => {
       await fetch(TASK_PAD_UPDATE, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('key')}`
            },
            body : JSON.stringify(text)
        })
        setEditing(!isEditing)
    }

    const handleEdit = () => {
        setEditing(!isEditing)
    }

    const handleAddTimeStamp = () => {
        setText({content : text.content + ` \n---\n###### _${new Date().toLocaleString()}_\n---\n`})
    }

    return (
        <div>
            <TaskpadHeader />
            {
                isEditing ? <textarea className="text-area"
                    value={text.content}
                    placeholder="Enter your content here"
                    onChange={e => setText({content : e.target.value})}
                    ></textarea> : <div
                     className="text-area">
                    <ReactMarkdown>{text.content}</ReactMarkdown>
                </div>
            }
            {
                isEditing ? <div><button 
                className="menu-container edit-button" 
                onClick={handleSave}
                ><img src={SaveIcon} alt="Save"/></button><br/><br/>
                <button 
                className="menu-container edit-button"
                onClick={handleAddTimeStamp}
                ><img src={TimeStampIcon} alt="Add timestamp"/></button>
                </div> : 
                <button 
                className="menu-container edit-button" 
                onClick={handleEdit}><img src={EditIcon} alt="Edit"/></button>
            }
        </div>
    )
}

export default TaskPad