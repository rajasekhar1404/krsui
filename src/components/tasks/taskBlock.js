import { statuses } from "./taskStatus";


const Task = ({ title, description, dueDate, status }) => {

    return (
        <div className="task-container">
            <div>
                {
                    (function() {
                        if(status !== statuses[2] &&  status !== statuses[3]) {
                            if (!dueDate) {}
                            else if(dueDate && Math.round((new Date(dueDate) - new Date())/(1000 * 60 * 60 * 24)) >= 0) {
                                return <h3 className="due-days">{Math.round((new Date(dueDate) - new Date())/(1000 * 60 * 60 * 24)) || ''}</h3>
                            } else {
                                return <h3 className="due-days delyed">{Math.round((new Date(dueDate) - new Date())/(1000 * 60 * 60 * 24)) || ''}</h3>
                            } 
                        }
                    })()
                }
                <h4>{title}</h4>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Task;