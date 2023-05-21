import { useState } from 'react';
import MenuLogo from '../static/list.svg'

const Menu = ({items}) => {

    const initialState = {isActive:false, items}
    const [isMenuActive, setMenuActive] = useState(initialState)

    const handleMouseEvent = () => {
        setMenuActive({...isMenuActive, isActive: !isMenuActive.isActive})
    }


    return (
        <div className='menu-container'>
            <img onClick={handleMouseEvent} onMouseEnter={handleMouseEvent} src={MenuLogo} alt="menu" className="menu-icon"/>
            <ul className='menu-items' onMouseLeave={handleMouseEvent}>
                {
                    isMenuActive.isActive && isMenuActive.items.length !== 0 && isMenuActive.items.map(item => {
                            return <li 
                            key={item.option} 
                            onClick={() => {
                                item.onClickHandler();
                                setMenuActive({...isMenuActive, isActive: false})
                            }}
                            >{item.option}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Menu;