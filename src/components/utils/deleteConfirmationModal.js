import './Modal.css'

const DeleteConfirmationModal = ({ setDeleteModal, handleDelete, taskpadId }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h2>Delete taskpad</h2>
                </div>
                <div className="body">
                    <p>{`Are you sure you want to delete ${taskpadId} ?`}</p>
                </div>
                <div className="footer">
                    <button onClick={() => setDeleteModal(false)} id="cancelBtn">No</button>
                    <button onClick={handleDelete}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal