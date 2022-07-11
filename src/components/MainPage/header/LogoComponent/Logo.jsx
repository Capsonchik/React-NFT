import s from './Logo.module.css'
import logo from '../../../Images/symbol.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return(
        <Link to='/' className={s.logo}>
            <img src={logo} alt='logo'/>
            <h1>crypter</h1>
        </Link>
    )
}

export default Logo;