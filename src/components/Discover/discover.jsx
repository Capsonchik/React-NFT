import { DiscoverStyled } from "./discover.styled";
import { Container, Header } from "../GlobalStyle/Styled.Global"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import Card from "../Card/card"
import {Cards} from "../State/Cards"



const Discover = () => {

    const [activeLink, setActiveLink] = useState(true) 

    const clickActiveLink = () => {
        setActiveLink(true)
    }

    const clickLink = () => {
        setActiveLink(false)
    }

    const mapCards = Cards.map(el => {
        return (
            <div key={el.id} className="card">
                <Card data={el}/>
            </div>
        )
    })



    return ( 
        <DiscoverStyled>
            <Container>
                <Header>Discover</Header>
                <div className="discover-nav-block">
                    <div className="discover-nav-block__added">
                        <span>Recently added</span>
                        <img src="/img/circle-arrow/circle-arrow-down.png" alt="btn-arw-dwn" />
                    </div>
                    <nav className="discover-nav-block__nav">
                        <NavLink onClick={clickActiveLink} to='/' className={ activeLink ? 'nav-link-active' : 'nav-link'}>All items</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Art</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link-active')}>Game</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Photograhy</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Music</NavLink>
                        <NavLink onClick={clickLink} to='/' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Video</NavLink>
                    </nav>
                    <button className="discover-nav-block__btn">
                        Filter 
                        <img src="/img/close-icon/close-icon.png" alt="close-btn-con" />
                    </button>
                </div>
                <div className="discover-sort-block">
                    <div className="discover-sort-block__item">
                        <span>Prive</span>
                        <img src="/img/circle-arrow/circle-arrow-down.png" alt="btn-arw-dwn" />
                    </div>
                    <div className="discover-sort-block__item">
                        <span>Likes</span>
                        <img src="/img/circle-arrow/circle-arrow-down.png" alt="btn-arw-dwn" />
                    </div>
                    <div className="discover-sort-block__item">
                        <span>Creator</span>
                        <img src="/img/circle-arrow/circle-arrow-down.png" alt="btn-arw-dwn" />
                    </div>
                    <div className="discover-sort-block__item">
                        <span>Price Ranhe</span>
                        <img src="/img/circle-arrow/circle-arrow-down.png" alt="btn-arw-dwn" />
                    </div>
                </div>
                <div className="discover-cards-block">
                    <div className="discover-card">
                        {mapCards}
                    </div>
                </div>
            </Container>
        </DiscoverStyled>
     );
}
 
export default Discover;