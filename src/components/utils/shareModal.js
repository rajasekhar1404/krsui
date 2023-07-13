import './Modal.css'
import COPYLINK from '../../static/clipboard.png'
import FACEBOOK from '../../static/facebook.png'
import INSTAGRAM from '../../static/instagram.png'
import WHATSAPP from '../../static/WhatsApp.svg.webp'
import TWITTER from '../../static/twitter.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ShareModal = ({ setShareModal, taskpadId }) => {

    const email = useSelector(state => state.user.email)
    let url = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) +  email + window.location.href.substring(window.location.href.lastIndexOf('/'))

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h2>Share taskpad - {taskpadId}</h2>
                </div>
                <div className="body">
                    <span className='share-modal-icon' onClick={() => {
                        navigator.clipboard.writeText(url)
                        setShareModal(false)
                    }}>
                        <img src={COPYLINK} alt='copy-link' width={35}/>
                    </span>
                    <Link to={"http://wa.me/?text=" + url} target='_blank' className='share-modal-icon'>
                        <img src={WHATSAPP} alt='whatsapp' width={45}/>
                    </Link>
                    <Link to={"http://www.facebook.com/sharer.php?u="+url} target='_blank' className='share-modal-icon'>
                        <img src={FACEBOOK} alt='facebook' width={40}/>
                    </Link>
                    <Link to={"https://www.instagram.com/"} target='_blank' className='share-modal-icon'>
                        <img src={INSTAGRAM} alt='instagram' width={40}/>
                    </Link>
                    <Link to={"https://twitter.com/intent/tweet?text="+url} target='_blank' className='share-modal-icon'>
                        <img src={TWITTER} alt='twitter' width={40}/>
                    </Link>
                </div>
                <div className="footer">
                    <button onClick={() => setShareModal(false)} id="cancelBtn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ShareModal