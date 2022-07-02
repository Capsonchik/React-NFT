import s from './Logo.module.css'
import logo from '../../../Images/symbol.png'

const Logo = () => {
    return(
        <div className={s.logo}>
            <img src={logo} alt='logo'/>
            <h1>crypter</h1>
        </div>
    )
}

export default Logo;