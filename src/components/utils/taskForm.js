import { statuses } from '../tasks/taskStatus'

const TaskForm = (props) => {
    const { header, title, startDate, dueDate, handleChange, description, setEditing, handleUpdate, hadleDelete, status } = props
    

    function prepareDate(date) {
        if (date) {
            let requiredDate = ''
            const localDate = new Date(date)
            requiredDate += localDate.getFullYear() + '-'
            requiredDate += localDate.getMonth() > 9 ? (localDate.getMonth() + 1) + '-' : '0' + (localDate.getMonth() + 1) + '-'
            requiredDate += localDate.getDate() > 9 ? localDate.getDate() + 'T' : '0' + localDate.getDate() + 'T'
            requiredDate += localDate.getHours() > 9 ? localDate.getHours() + ':' : '0' + localDate.getHours() + ':'
            requiredDate += localDate.getMinutes() > 9 ? localDate.getMinutes() + ':' : '0' + localDate.getMinutes() + ':'
            requiredDate += localDate.getSeconds() > 9 ? localDate.getSeconds() + ':' : '0' + localDate.getSeconds()
            return requiredDate
        }
        return date
    }

    return (
        <div className='update-form'>
            <h3>{header}</h3>
                <table className='update-table'>
                    <tbody>
                    <tr>
                        <td>Title: </td>
                        <td><input name='title' placeholder='Enter task title' value={title} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Description: </td>
                        <td><textarea rows={8} name='description' placeholder='Enter task description' value={description} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Start date & Time</td>
                        <td><input type={'datetime-local'} min={prepareDate(new Date().toISOString()) || ''} name='startDate' value={prepareDate(startDate) || ''} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Due date & Time</td>
                        <td><input type={'datetime-local'} name='dueDate' value={prepareDate(dueDate) || ''} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Status: </td>
                        <td>
                            <select className='update-status' name='status' onChange={handleChange}>
                                <option hidden>{status}</option>
                                {
                                    statuses.filter(eachStatus => eachStatus !== status ).map(status => <option key={status}>{status}</option>)
                                }
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={() => setEditing({isActive: false, editingTask: {}, isUpdated: false})}>Cancel</button>
                <button onClick={handleUpdate}>Save</button>
                {header === 'CREATE TASK' ? <></> : <button onClick={hadleDelete}>Delete</button>}
        </div>
    )
}

export default TaskForm;