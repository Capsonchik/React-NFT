import { HotCollectionStyled } from "./hotCollection.styled";
import {Container, Header} from "../GlobalStyle/Styled.Global"

const HotCollection = () => {
    return ( 
        <HotCollectionStyled>
            <Container>
                <Header>Hot collections</Header>
            </Container>
        </HotCollectionStyled>
     );
}
 
export default HotCollection;
