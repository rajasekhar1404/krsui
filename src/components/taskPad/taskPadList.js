import { useNavigate } from "react-router-dom"

const TaskpadList = ( { email, titles } ) => {

    const navigate = useNavigate()

    const handleTask = (id) => {
        email ? navigate("/taskpad/" + email + "/" + id) : navigate("/taskpad/" + id)
    }

    return (
        <>
            {
                titles && titles.length > 0 && <section>
                    <div className='section-wrapper'>
                        <div className='section-type'>
                            Blogs
                        </div>
                    </div>
                    <div className='taskpad-wrapper'>
                        {
                            titles.map((eachTitle, index) => 
                                <div className='taskpadList-container' key={index} onClick={() => handleTask(eachTitle.taskpadId)}>
                                    <span className='taskpadList-container-taskpadId'>{eachTitle.taskpadId}</span>
                                    <span className='taskpadList-container-title'>{eachTitle.title}</span>
                                </div>
                            )
                        }
                    </div>
                </section>
            }
        </>
    )
}

export default TaskpadList