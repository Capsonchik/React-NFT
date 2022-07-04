import StyledSignup from "./Signup.styled"
import {Link} from 'react-router-dom'

const Signup = () => {

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <StyledSignup>
      <div className={'popup'}>
        <div className='popup__container'>
          <div className='popup__cross'></div>
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
              placeholder='password' />
            <div className='popup__checkbox-block'>
            <input
              type="checkbox"
              className="custom-checkbox"
              id="license"
              name="license"
              value="true"/>
              <label for="license">accept the license agreement</label>
              </div>
            <button type='submit' className='popup__submit'>Зарегистрироваться</button>
            <Link to='/signin' className='popup__link'>Войти</Link>
          </form>
        </div>
      </div>
    </StyledSignup>
  )
}

export default Signup