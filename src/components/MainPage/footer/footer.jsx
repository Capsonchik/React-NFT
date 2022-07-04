import s from './Footer.module.css'
import { Link } from "react-router-dom";
import Logo from '../header/LogoComponent/Logo.jsx'
import circle from '../../Images/footer-button.png'

const Footer = () => {
    return(
        <footer>
            <div className={s.container}>
                <div className={s.footerLogo}>
                    <Logo/>
                    <p>Новая Креативная экономика.</p>
                </div>
                <nav className={s.footerNav}>
                    <h3>Crypter.</h3>
                    <Link className={s.footerLink} to='/'>Магазин</Link>
                    <Link className={s.footerLink}  to='/'>Добавить кошелек</Link>
                    <Link className={s.footerLink}  to='/'>Добавить товар</Link>
                </nav>
                <nav className={s.footerNav}>
                    <h3>Информация</h3>
                    <Link className={s.footerLink}  to='/'>Загрузить</Link>
                    <Link className={s.footerLink}  to='/'>Демо</Link>
                    <Link className={s.footerLink}  to='/'>Поддержка</Link>
                </nav>
                <div className={s.footerNews}>
                    <h3>Подписка на новости</h3>
                    <p>Подпишитесь на нашу рассылку новостей, чтобы получить больше бесплатных курсов и ресурсов по дизайну</p>
                    <div className={s.footerInput}>
                        <input type="text" placeholder='Введите Email' />
                        <button className={s.footerBtn}>
                            <img src={circle} alt="button" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.copiright}>
                <div className={s.copirightText}>
                    <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
                <div className={s.copirightText}>
                    <p>We use cookies for better service.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;