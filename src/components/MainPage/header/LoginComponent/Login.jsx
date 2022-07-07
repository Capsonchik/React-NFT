// import Signin from '../../../Signin/Signin';
import s from './Login.module.css'
import {Link} from "react-router-dom";

const Login = () => {
  return (
        // <button className={s.uploadWallet}>Добавить кошелек</button>
    <Link to='/signin'>
        <button type='button'  className={s.loginBlock} >Войти / Регистрация</button>
    </Link>
  )
}

export default Login;