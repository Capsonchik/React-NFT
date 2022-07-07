import styled from "styled-components"; 

export const SellersBlock = styled.div`
    .sellers-wraper {
        width: 100%;
        display: flex;
    }

    .user {
        width: 200px;
        height: 247px;
        background: #FCFCFD;
        border-radius: 16px;
        margin-right: 32px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .user__top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 24px;
        border-bottom: 1px solid #E6E8EC;
    }

    .user__top-achivments {
        width: 51px;
        height: 24px;
        background: #3772FF;
        border-radius: 24px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #FCFCFD;
    }

    .user__photo {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin: 0 auto;
    }

    .user__name {
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        color: #23262F;
    }

    .user__balanse {
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        color: #353945;
    }

    .user__balanse-currensy {
        font-weight: 400;
        font-size: 12px;
        color: #777E91;
    }

`