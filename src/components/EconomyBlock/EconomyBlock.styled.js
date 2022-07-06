import styled from "styled-components";
import { FlexBox } from "../GlobalStyle/Styled.Global";

export const StyledEconomyBlock = styled.section`
    .economy-block {
        padding-top: 128px;
    }

    p {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        color: #777E91;
        margin-bottom: 10px;        
    }

    h2 {
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 24px;
    }

    .economy-button {
        width: 180px;
        height: 48px;
        border: 2px solid #E6E8EC;
        border-radius: 90px;
        font-weight: 700;
        font-size: 16px;
        color: #23262F;
        background-color: inherit;
    }
`

export const FlexBoxColumn = styled(FlexBox)`
    flex-direction: column;
`