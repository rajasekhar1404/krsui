import PreviousIcon from '../../static/previous.png'
import NextIcon from '../../static/next.png'
import { updateTaskpad } from '../apis/taskpadRequest'
import { toast } from 'react-toastify'

const TaskpadHeader = ({ titles, handleCurrentTaskpad, currentTaskpad, isEditing, handleSave, changeHandler }) => {

    const handleVisibility = async (e) => {
        changeHandler(e)
        const response = await updateTaskpad({...currentTaskpad, isPublic: !currentTaskpad.isPublic})
        let message = currentTaskpad.taskpadId + ' is'
        currentTaskpad.isPublic ? message = `${message} private` : message = `${message} public`
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
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
                </div>
                <div className='taskpad-public'>
                    <input type='checkbox' name='isPublic' onChange={handleVisibility} checked={currentTaskpad.isPublic}/><p>Public</p>
                </div>
                <div className='taskpad-button'>
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
        </div>
    )
}

export default TaskpadHeader