import styled from 'styled-components'
import {Flex} from '../../GlobalStyles/Global.styled'

export const WrapperButton = styled.div`
    
    .button-wrapper {
        padding-right: 17px;
       
    }

    .button-img {
        padding-left: 12px;
    }

    .button-img__shape {
        margin-left: -12px;
        margin-bottom: -2px;
    }

    .button-img__frame {
        margin-left: -13px;
        margin-bottom: -2px;
    } 

`

export const FlexBtn = styled(Flex)`
    justify-content: end;
    align-items: end;
    padding-bottom: 23px;
    height: 320px;
`