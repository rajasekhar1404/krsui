import { useEffect, useState } from "react"
import { findAllPublicTaskpadTitlesAndIds, findAllTaskpadTitlesAndIds } from "../apis/taskpadRequest"
import { useNavigate } from "react-router-dom"

const TaskpadList = ( { email } ) => {

    const [titles, setTitles] = useState([])

    useEffect(() => {
        email ? findAllPublicTaskpadTitlesAndIds(email).then(json => setTitles(json)) : findAllTaskpadTitlesAndIds().then(json => setTitles(json))
    }, [titles.length, email])

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