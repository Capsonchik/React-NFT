import { HotBidStyled } from "./HotBid.styled";
import { Container, Header } from "../GlobalStyle/Styled.Global";
import Card from "../Card/card";
import {Cards} from "../State/Cards.js"

const HotBid = () => {
    const mapCards = Cards.map(el => {
        return (
            <div key={el.id} className="card">
                <Card data={el}/>
            </div>
        )
    })


    return ( 
        <HotBidStyled>
            <Container>
                <Header>Hot Bid</Header>
                <div className='cards'>
                    {mapCards}
                </div>
            </Container>
        </HotBidStyled>
    );
}
 
export default HotBid;