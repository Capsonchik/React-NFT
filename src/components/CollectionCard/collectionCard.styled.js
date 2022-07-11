import styled from "styled-components";

export const CollectionCardStyled = styled.div`
    & img {
        width: 100%;
        border-radius: 8px;
    }
    
    .collections__items {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .collections__item {
        width: 31%;

        & img {
            border-radius: 8px;
        }
    }

    .collections__name {
        margin-top: 16px;
        font-weight: 600;
        font-size: 24px;
    }

    .collections__owner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        & img {
            width: 24px;
            height: 24px;
        }
    }

    .collections__owner-summary {
        width: auto;
        border: 2px solid #E6E8EC;
        border-radius: 4px;
        background: inherit;
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        padding: 6px;
    }
`