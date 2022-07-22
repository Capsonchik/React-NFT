import { useState } from "react"
import { NavLink } from "react-router-dom"
import { StyledNavigation } from "./Navigation.styled"


export const Navigation = () => {


    const [activeLink, setActiveLink] = useState(true) 

    const clickActiveLink = () => {
        setActiveLink(true)
    }

    const clickLink = () => {
        setActiveLink(false)
    }

    return(
        <StyledNavigation>
            <NavLink onClick={clickActiveLink} to='/profile' className={ activeLink ? 'nav-link-active' : 'nav-link'}>On Sale</NavLink>
            <NavLink onClick={clickLink} to='/profile/collectibles' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Collectibles</NavLink>
            <NavLink onClick={clickLink} to='/profile/created' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Created</NavLink>
            <NavLink onClick={clickLink} to='/profile/following' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Following</NavLink>
            <NavLink onClick={clickLink} to='/profile/followers' className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}>Followers</NavLink>
        </StyledNavigation>
    )
}