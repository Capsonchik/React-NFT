
import search from '../../Images/Shape.png';
import bell from '../../Images/Bell.png';
import { Link } from "react-router-dom";
import Login from './LoginComponent/Login.jsx';
import Logo from './LogoComponent/Logo';
import { NotificationModal } from './NotificationModal/NotificationModal';
import { useState } from 'react';
import { HeaderStyled, HeaderFlexContainer } from './header.styled';



const Header = () => {

    const [showModal, setShowModal] = useState(false)
    const openModal = ()=> {
        setShowModal(!showModal)
    }
    
    return(
        <HeaderStyled>
            <HeaderFlexContainer>
                <Logo/>
                <nav>
                    <Link className="nav-link" to='/'>Discover</Link>
                    <Link className="nav-link" to='/'>How it work</Link>
                </nav>
                <div className="header-input">
                    <input className="header-search" type="text" placeholder='Search'/>
                    <button className="search-button" type='submit'>
                        <img src={search} alt="search"/>
                    </button>
                </div>
                <button onClick={openModal} className="img">
                    <img src={bell} alt="bell"/>
                    <NotificationModal showModal={showModal} setShowModal={setShowModal}/>
                </button>
                
                <button className="header-upload-btn">Upload</button>
                <Login/>
            </HeaderFlexContainer>
          
        </HeaderStyled>
    )
}

export default Header;