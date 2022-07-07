import s from './Header.module.css';
import search from '../../Images/Shape.png';
import bell from '../../Images/Bell.png';
import { Link } from "react-router-dom";
import Login from './LoginComponent/Login.jsx';
import Logo from './LogoComponent/Logo';
import { NotificationModal } from './NotificationModal/NotificationModal';
import { useState } from 'react';


const Header = () => {

    const [showModal, setShowModal] = useState(false)
    const openModal = ()=> {
        setShowModal(!showModal)
    }
    
    return(
        <header>
            <div className={s.container}>
                <Logo/>
                <nav className={s.nav}>
                    <Link className={s.navLink} to='/'>Discover</Link>
                    <Link className={s.navLink} to='/'>How it work</Link>
                </nav>
                <div className={s.headerInput}>
                    <input className={s.headerSearch} type="text" placeholder='Search'/>
                    <button className={s.searchButton} type='submit'>
                        <img src={search} alt="search"/>
                    </button>
                </div>
                <button onClick={openModal} className={s.img}>
                    <img src={bell} alt="bell"/>
                    <NotificationModal showModal={showModal} setShowModal={setShowModal}/>
                </button>
                
                <button className={s.uploadButton}>Upload</button>
                <Login/>
            </div>
          
        </header>
    )
}

export default Header;