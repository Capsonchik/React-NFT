import styled from "styled-components";

export const SellersSortBlockStyled = styled.div`
    .sellers-sort-wraper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sellers-sort-left-block {
        display: flex;
        align-items: center;
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        color: #777E91;
    }

    span {
        font-weight: 700;
        font-size: 40px;
        margin-right: 20px;
    }

    .popular-sellers__date-sort {
        width: 256px;
        height: 48px;
        background: #FCFCFD;
        border: 2px solid #E6E8EC;
        border-radius: 12px;
        padding-left: 8px;
        padding-right: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & span {
            font-weight: 500;
            font-size: 14px;
        }
    }

    
`