import styled from "styled-components";
import { Container } from "../../GlobalStyles/Global.styled";

export const FooterStyled = styled.footer`
    padding-top: 82px;

    & h3 {
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 40px;
    }

    & p {
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 14px;
    }

    & input {
        width: 90%;
        height: 40px;
        border: 2px solid #E6E8EC;
        border-radius: 90px 0px 0px 90px;
        border-right: none;
        padding-left: 10px;

        ::placeholder {
            font-weight: 400;
            font-size: 14px;
            color: #777E91;
        }
    }
    

    .footer-logo {
        display: flex;
        flex-direction: column;
    }

    .footer-nav {
        display: flex;
        flex-direction: column;
    }

    .footer-link {
        cursor: pointer;
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        color: #777E91;
        margin-bottom: 23px;

        :last-child {
            margin-bottom: 0;
        }
    }

    .footer-news {
        flex-basis: 25%;
    }

    .footer-input {
        display: flex;
    }

    .footer-btn {
        display: flex;
        height: 40px;
        justify-content: center;
        align-items: center;
        background-color: inherit;
        border: 2px solid #E6E8EC;
        border-radius: 0px 90px 90px 0px;
        border-left: 0;
        padding-right: 10px;
    }

    .copiright {
        width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .copiright-text {
    font-weight: 400;
    font-size: 12px;
    padding-top: 32px;
    padding-bottom: 32px;

    & p {
        color: #777E91;
    }
}

`

export const ContainerFlex = styled(Container)` 
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E6E8EC;
    padding-bottom: 48px;
`