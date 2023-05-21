import { GET_ALL_TASKS } from "../apis/taskApis";
import { useEffect, useState } from "react"
import Task from "./taskBlock";
import CreateTask from "./createTask";
import { statuses } from "./taskStatus";
import UpdateTask from "./updateTask";
import Menu from "../menu";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../utils/LoadingSpinner";
import { OK } from "../utils/constants";

const TasksDashboard = () => {

    const [tasks, setTasks] = useState([])
    const [isEditing, setEditing] = useState({
        isCreatingActive: false,
        isActive: false,
        editingTask: {},
        isUpdated: false
    })
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState({
        error: false,
        message: 'Unable to load the tasks'
    })

    useEffect(() => {
        getAllTasks();
    }, [isEditing.isUpdated, isEditing.isCreatingActive])

    const getAllTasks = async () => {
        try {
            setLoading(true)
            const response = await fetch(GET_ALL_TASKS, {
                method: 'GET',
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('key')}`
                }
            })
            setLoading(false)
            if (response.status !== OK) {
                throw new Error(isError.message)
            }
            const data = await response.json()
            setTasks(data)
        } catch (err) {
            setLoading(false)
            setError({error: true, message: err.message})
            toast.error(isError.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    const handleEdit = (task) => {
        if (task._id === isEditing.editingTask._id) {
            setEditing({
                isActive: false,
                editingTask: {},
                isUpdated: false
            })
        } else {
            setEditing({
                isActive: true,
                editingTask: task,
                isUpdated: false
            })
        }
    }

    const menuItems = [
        {option: 'Create task', onClickHandler: function() {setEditing({...isEditing, isCreatingActive: true})}}, 
        {option: 'Delete task', onClickHandler: function() {console.log(2)}},
        {option: 'Update task', onClickHandler: function() {console.log(2)}}
    ]

    return (
        <>
        <Menu items={menuItems} />
        {
            isEditing.isCreatingActive && <CreateTask tasks={tasks} isEditing={isEditing} setEditingFunction={setEditing} setTasks={setTasks}/>
        }
        {
            isEditing.isActive && <UpdateTask isEditing={isEditing} setEditing={setEditing} setLoading={setLoading}/>
        }
        {
            isLoading && <LoadingSpinner />
        }
        {
            statuses.map(eachStatus => <div className="task-type-container" key={eachStatus}>
                <div className="task-type">{eachStatus}</div>
                <div className="tasks-container">
                    <ul>
                        {
                            tasks.filter(eachTask => eachTask.status === eachStatus).sort((firstTask, secondTask) => new Date(firstTask.dueDate) - new Date(secondTask.dueDate)).map(task => <li key={task._id} onClick={() => handleEdit(task)}>
                                <Task title={task.title} description={task.description} dueDate={task.dueDate} status={task.status}/>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
            )
        }
        <ToastContainer />
        </>
    )
}

export default TasksDashboard;