import s from './Header.module.css'
import logo from '../../Images/symbol.png'

const Header = () => {
    return(
        <header>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={logo}/>
                    <h1>crypter</h1>
                </div>
                <nav className={s.nav}>
                    <span>Discover</span>
                    <span>How it works</span>
                </nav>
            </div>
        </header>
    )
}

export default Header;