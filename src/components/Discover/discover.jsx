import { DiscoverStyled } from "./discover.styled";
import { Container, Header } from "../GlobalStyle/Styled.Global"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Discover = () => {

    const [activeLink, setActiveLink] = useState(true) 

    const clickActiveLink = () => {
        setActiveLink(true)
    }

    const clickLink = () => {
        setActiveLink(false)
    }



    return ( 
        <DiscoverStyled>
            <Container>
                <Header>Discover</Header>
                <div className="discover-nav-block">
                    <div className="discover-nav-block__added">test</div>
                    <nav className="discover-nav-block__nav">
                        <NavLink onClick={clickActiveLink} to='/' className={ activeLink ? 'nav-link-active' : 'nav-link'}>All items</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Art</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link-active')}>Game</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Photograhy</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Music</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Video</NavLink>
                    </nav>
                    <button className="discover-nav-block__btn">Btn</button>
                </div>
            </Container>
        </DiscoverStyled>
     );
}
 
export default Discover;