import { useState } from "react"
import { CREATE_TASK } from "../apis/taskApis"
import TaskForm from "../utils/taskForm"

const CreateTask = ({ tasks, setTasks, isEditing, setEditingFunction }) => {

    const initalTask = {
        title: '',
        description: '',
        startDate: '',
        dueDate: '',
        status: 'Select a status'
    }

    const [task, setTask] = useState(initalTask)

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(CREATE_TASK, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem('key')}`
                },
                body: JSON.stringify(task)
            });
            if (response.status === 500) {
                const data = await response.json();
                throw new Error(data.message);
            }
            const data = await response.json();
            setTasks([...tasks, data.title, data.status, data.description]);
            setTask(initalTask);
            setEditingFunction({ ...isEditing, isCreatingActive: false });
        } catch (err) {
            console.log(err.message);
            // handle the error here
        }
    };

    return (
        <TaskForm 
        header={'CREATE TASK'}
        title={task.title}
        description={task.description}
        startDate={task.startDate}
        dueDate={task.dueDate}
        status={task.status}
        setEditing={setEditingFunction}
        handleChange={handleChange}
        handleUpdate={handleSubmit}
        />
    )
}

export default CreateTask;