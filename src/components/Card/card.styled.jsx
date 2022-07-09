import styled from "styled-components";

export const CardStyled = styled.div`
    width: 100%;

    & img {
        width: 100%;
    }

    .name-and-price {
        margin-top: 21px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name {
        font-weight: 500;
        font-size: 16px;
        color: #23262F;
    }

    .price {
        width: 25%;
        border: 2px solid #45B36B;
        border-radius: 4px;
        color: #45B36B;
        font-weight: 700;
        font-size: 12px;
        text-align: center;
    }

    .card-followers {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E6E8EC;
        padding-bottom: 12px;

        & span {
            font-weight: 500;
            font-size: 14px;
            color: #353945;
        }
    }

    .highest-bid {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .highest-bid__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & img {
            width: 20px;
            height: 20px;
        }

        & p {
            font-weight: 400;
            font-size: 12px;
            color: #777E91;
        }

        & span {
            font-weight: 600;
            font-size: 12px;
            color: #353945;
        }
    }
`