import StyledSignup from "./Signup.styled"
import {Link} from 'react-router-dom'
import Logo from '../MainPage/header/LogoComponent/Logo'

import twitter from './img/Twitter.svg'
import insta from './img/Insta.svg'
import facebook from './img/FaceBook.svg'

const Signup = () => {

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <StyledSignup>
      <div className={'popup'}>
        <div className='popup__container'>
          <div className='popup__logo'>
            <Logo/>
          </div>
          <Link to='/'>
            <div className='popup__cross'></div>
            </Link>
          <h2 className='popup__title'>Регистрация</h2>
          <form
            name='signup'
            action='#'
            method='post'
            encType='multipart/form-data'
            className='popup__form'
            noValidate
            onSubmit={onSubmit}>
            <input
              type='text'
              className='popup__input'
              minlength='3'
              maxlength='40'
              placeholder='nic name'/>
            <input
              type='email'
              className='popup__input'
              minlength='5'
              maxlength='40'
              placeholder='email'/>
            <input
              type='password'
              className='popup__input'
              minlength='4'
              maxlength='30'
              placeholder='password'/>
            <input
              type='password'
              className='popup__input'
              minlength='4'
              maxlength='30'
              placeholder='repeat password'/>
            <div className='popup__checkbox-block'>
              <input
                type="checkbox"
                className="custom-checkbox"
                id="license"
                name="license"
                value="true"/>
              <label for="license" className='popup__license'>accept the license agreement</label>
            </div>
            <Link to='/signin'>
              <button type='submit' className='popup__submit'>Зарегистрироваться</button>
              </Link>
            <dib className='popup__block-img'>
              <img className='popup__img' src={twitter} alt='twitter'/>
              <img className='popup__img' src={insta} alt='instagram'/>
              <img className='popup__img' src={facebook} alt='facebook'/>
            </dib>
            <Link to='/signin' className='popup__link'>Войти</Link>
          </form>
        </div>
      </div>
    </StyledSignup>
  )
}

export default Signup