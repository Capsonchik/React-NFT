import styled from 'styled-components'

// const styledButton = styled(styledComponent)` `

const StyledSignin = styled.div `
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 0.5s, opacity 0.5s linear;

&__container {
  width: 448px;
  border-radius: 20px;
  background-color: #FCFCFD;
  display: flex;
  flex-direction: column;
  position: relative;
}

&__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #23262F;
  margin-top: 32px;
  margin-left: 32px;
  margin-bottom: 30px;
}

&__cross {
  width: 17px;
  height: 17px;
  position: absolute;
  right: 45px;
  top: 35px;
  cursor: pointer;
  transition: opacity .3s linear;
}

&__cross:hover {
  opacity: 0.7;
}

&__cross:before,
&__cross:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 14px;
  width: 2px;
  background-color: #23262F;
}

&__cross:before {
  transform: rotate(45deg);
}

&__cross:after {
  transform: rotate(-45deg);
}

&__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

&__input {
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  padding-left: 15px;
  box-sizing: border-box;
  border: none;
  width: 384px;
  height: 48px;
  font-size: 14px;
  line-height: 17px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: #fff;
}

&__submit {
  width: 384px;
  height: 48px;
  color: white;
  border-radius: 90px;
  border-color: rgba(0, 0, 0, 0.2);
  background-color: #e8eaf3;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  margin-top: 10px;
  transition: transform .5s, box-shadow .5s;
  /* background-color: rgb(22%, 45%, 100%, 0.25); *///! еще пригодиться
  background-color: #3772FF;
}

&__submit:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 5px #777E91;
}

&__link {
text-decoration: none;
margin-bottom: 20px;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #777E91;
transition: color .3s linear;
}

&__link:hover {
  color: #23262F;
}

&__logo {
  margin-top: 50px;
  margin: 20px;
}
}
`

export default StyledSignin