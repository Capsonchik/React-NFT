import { HotCollectionStyled } from "./hotCollection.styled";
import {Container, Header} from "../GlobalStyle/Styled.Global"
import CollectionCard from "../CollectionCard/collectionCard";


const HotCollection = () => {
    return ( 
        <HotCollectionStyled>
            <Container>
                <Header>Hot collections</Header>
                <div className="collections">
                    <div className="collections__card">
                        <CollectionCard/>
                    </div>
                    <div className="collections__card">
                        <CollectionCard/>
                    </div>
                    <div className="collections__card">
                        <CollectionCard/>
                    </div>
                    
                </div>
            </Container>
        </HotCollectionStyled>
     );
}
 
export default HotCollection;
