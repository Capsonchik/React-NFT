import styled from 'styled-components'
import {Flex} from '../../GlobalStyles/Global.styled'

export const WrapperButton = styled.div`
    .button-img {
        padding-left: 12px;

        &__shape {
        margin-left: -12px;
        margin-bottom: -2px;
        }

        &__frame {
        margin-left: -13px;
        margin-bottom: -2px;
        } 
    }
`

export const FlexBtn = styled(Flex)`
    justify-content: end;
    align-items: end;
    padding-bottom: 23px;
    height: 320px;
`