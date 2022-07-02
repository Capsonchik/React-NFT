import s from './Header.module.css'
import logo from '../../Images/symbol.png'
import search from '../../Images/Shape.png'
import bell from '../../Images/Bell.png'
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={logo}/>
                    <h1>crypter</h1>
                </div>
                <nav className={s.nav}>
                    <Link className={s.navLink} to='/'>Магазин</Link>
                    <Link className={s.navLink} to='/'>Как это работает</Link>
                </nav>
                <div className={s.headerInput}>
                    <input class={s.headerSearch} type="text" placeholder='Поиск'/>
                    <button className={s.searchButton} type='submit'>
                        <img src={search} alt="search"/>
                    </button>
                </div>
                <img src={bell} alt="bell"/>
                <button className={s.uploadButton}>Загрузить</button>
                <button className={s.uploadWallet}>Добавить кошелек</button>

            </div>
        </header>
    )
}

export default Header;