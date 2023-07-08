import PreviousIcon from '../../static/previous.png'
import NextIcon from '../../static/next.png'

const TaskpadHeader = () => {
    return (
        <div className="taskpad-header">
            <div className="previous-textpad">
                <img src={PreviousIcon} alt='previous' width={12}/>
            </div>
            <div className="taskpad-header-body">
                <div className='taskpad-title'>
                    <select className='taskpad-title-list' title='Taskpad posts'>
                        <option className='taskpad-title-option'><p>Taskpad title 1</p></option>
                        <option className='taskpad-title-option'><p>Taskpad title 2</p></option>
                        <option className='taskpad-title-option'><p>Taskpad title 3</p></option>
                        <option className='taskpad-title-option'><p>Taskpad title czxcxzcdsfd4</p></option>
                        <option className='taskpad-title-option'><p>Taskpad title 5</p></option>
                    </select>
                </div>
                <div className='taskpad-public'>
                    <input type='checkbox'/><p>Public</p>
                </div>
                <div className='taskpad-button'>
                    <p>Create new</p>
                </div>
                <div className='taskpad-button'>
                    <p>Share</p>
                </div>
                <div className='taskpad-button'>
                    <p>Edit</p>
                </div>
            </div>
            <div className="next-textpad">
                <img src={NextIcon} alt='previous' width={12}/>
            </div>
        </div>
    )
}

export default TaskpadHeader