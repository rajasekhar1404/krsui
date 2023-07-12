import PreviousIcon from '../../static/previous.png'
import NextIcon from '../../static/next.png'
import { useState } from 'react'
import ShareModal from '../utils/shareModal'
import Spinner from '../utils/spinner'

const PublicTaskpadHeader = ({ titles, handleCurrentTaskpad, currentTaskpad, loader }) => {

    const [shareModal, setShareModal] = useState(false)

    return (
        <div className="taskpad-header-public">
            <div className={`previous-textpad`} onClick={() => handleCurrentTaskpad(null, true, false)}>
                <img src={PreviousIcon} alt='previous' width={12}/>
            </div>
            <div className="taskpad-header-body">
                <div className='taskpad-title-public'>
                    <select className='taskpad-title-list' title='Taskpad posts' style={{ height: 40 }} value={`${currentTaskpad.taskpadId} : ${currentTaskpad.title}`} onChange={handleCurrentTaskpad}>
                        {
                            titles && titles.length > 0 && titles.map(eachTitle => <option key={eachTitle.taskpadId}>
                                {eachTitle.taskpadId} : {eachTitle.title}
                            </option>)
                        }
                    </select>
                    {
                        loader && <Spinner />
                    }
                </div>
                <div className='taskpad-button' onClick={() => setShareModal(!shareModal)}>
                    <p>Share</p>
                </div>
            </div>
            <div className={`next-textpad`} onClick={() => handleCurrentTaskpad(null, false, true)}>
                <img src={NextIcon} alt='previous' width={12}/>
            </div>
            {
                shareModal && <ShareModal setShareModal={setShareModal} taskpadId={currentTaskpad.taskpadId}/>
            }
        </div>
    )
}

export default PublicTaskpadHeader