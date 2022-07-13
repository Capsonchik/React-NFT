import { LogoStyled } from './logo.styled'
import logo from '../../../Images/symbol.png'
import { Link } from 'react-router-dom'


const Logo = () => {
    return(
        <LogoStyled>
            <Link to='/' className="logo">
                <img src={logo} alt='logo'/>
                <h1>crypter</h1>
            </Link>
        </LogoStyled>        
    )
}

export default Logo;