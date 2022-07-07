import styled from "styled-components";
import {BtnCard} from '../../../ProfilePage/cardProfile/CardInfo.styled'


export const StyledNotificationModal = styled.div`
    ::before {
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 64px;
        background-image:url(./modalImg/Vector-for-modal.png)  no-repeat;

    }


    .modal-popup-active {
        opacity: 1;
        display: block;
        width: 396px;
        height: 528px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0px 16px 64px -48px rgba(31, 47, 70, 0.4);
        border-radius: 24px;
        padding: 40px 32px 0 32px;
        z-index: 2;
        position: absolute;
        right: -194px;
        /* top: 93px; */
        top: 67px;
        transition: 0.8s ease;
    }

    .modal-popup{
        display: none;
        opacity: 0;
        transition: 0.5s ease;
    }

    .header-modal {
      padding-bottom: 16px;

        & span {
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #23262F;
            letter-spacing: -0.01em;
        }
    }

    .info-card {
        display: flex;
        width: 200px;
        justify-content: space-between;
        
    }

    .products-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 335px;
        padding: 13px 0;
    }

    .img {
        width: 64px;
        height: 64px;
    }

    .modal-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #141416;
    }

    .modal-subtitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #353945;
    }

    span {
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #777E91;
        }
    

`

export const BtnModal = styled(BtnCard)`
    margin-left: 77px;
`
