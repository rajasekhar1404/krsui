import './Modal.css'

const Modal = ({ setOpenModal, setNewTaskpad, createTaskPad }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h2>Create new taskpad</h2>
                </div>
                <div className="body">
                    <input className='title-input' onChange={e => setNewTaskpad(e.target.value)} placeholder='Enter taskpad title' required/>
                </div>
                <div className="footer">
                    <button onClick={() => setOpenModal(false)} id="cancelBtn">Cancel</button>
                    <button onClick={createTaskPad}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Modal