import PreviousIcon from '../../static/previous.png'
import NextIcon from '../../static/next.png'
import { createNewTaskpad, deleteTaskpadById, updateTaskpad } from '../apis/taskpadRequest'
import { toast } from 'react-toastify'
import Modal from '../utils/modal'
import Spinner from '../utils/spinner'
import { useState } from 'react'

const TaskpadHeader = ({ titles, setTitles, handleCurrentTaskpad, currentTaskpad, isEditing, handleSave, changeHandler, loading }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [newTaskPad, setNewTaskpad] = useState('')

    const handleVisibility = async (e) => {
        changeHandler(e)
        await updateTaskpad({...currentTaskpad, isPublic: !currentTaskpad.isPublic})
        let message = currentTaskpad.taskpadId + ' is'
        currentTaskpad.isPublic ? message = `${message} private` : message = `${message} public`
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    const handleDelete = async () => {
        const response = await deleteTaskpadById(currentTaskpad.taskpadId)
        if (response) toast.success(response.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        setTitles([])
    }

    const createTaskPad = async () => {
        if (newTaskPad.length <= 0) return
        const response = await createNewTaskpad(newTaskPad)
        if (response) toast.success(response.message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        setNewTaskpad('')
        setTitles([])
        setModalOpen(!modalOpen)
    }

    return (
        <div className="taskpad-header">
            <div className={`previous-textpad`} onClick={() => handleCurrentTaskpad(null, true, false)}>
                <img src={PreviousIcon} alt='previous' width={12}/>
            </div>
            <div className="taskpad-header-body">
                <div className='taskpad-title'>
                    <select className='taskpad-title-list' title='Taskpad posts' value={`${currentTaskpad.taskpadId} : ${currentTaskpad.title}`} onChange={handleCurrentTaskpad}>
                        {
                            titles && titles.length > 0 && titles.map(eachTitle => <option key={eachTitle.taskpadId}>
                                {eachTitle.taskpadId} : {eachTitle.title}
                            </option>)
                        }
                    </select>
                    {
                        loading && <Spinner />
                    }
                </div>
                <div className='taskpad-public'>
                    <input type='checkbox' name='isPublic' onChange={handleVisibility} checked={currentTaskpad.isPublic || false}/><p>Public</p>
                </div>
                <div className='taskpad-button' onClick={handleDelete}>
                    <p>Delete</p>
                </div>
                <div className='taskpad-button' onClick={() => setModalOpen(!modalOpen)}>
                    <p>Create new</p>
                </div>
                <div className='taskpad-button'>
                    <p>Share</p>
                </div>
                <div className='taskpad-button' onClick={handleSave}>
                    {
                        isEditing ? <p>Save</p> : <p>Edit</p>
                    }
                </div>
            </div>
            <div className={`next-textpad`} onClick={() => handleCurrentTaskpad(null, false, true)}>
                <img src={NextIcon} alt='previous' width={12}/>
            </div>
            {
                modalOpen && <Modal setOpenModal={setModalOpen} setNewTaskpad={setNewTaskpad} createTaskPad={createTaskPad}/>
            }
        </div>
    )
}

export default TaskpadHeader