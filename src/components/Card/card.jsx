import { CardStyled } from "./card.styled";

const Card = ({data}) => {
    return ( 
        <CardStyled>
            <img src={data.img} alt="main-photo" />
            <div className="name-and-price">
                <span className='name'>{data.cardName}</span>
                <span className='price'>{data.price} {data.value}</span>
            </div>
            <div className="card-followers">
                <div className="photo-users"></div>
                <span className="in-stock">3 in stock</span>
            </div>
            <div className="highest-bid">
                <div className="highest-bid__header">
                    <img src="img/cardStatistick/stat.png" alt="stat" />
                    <p>Highest bid <span>0.001 ETH</span></p>
                </div>
                <div className="highest-bid__new-bid">New Bid 🔥</div>
            </div>
        </CardStyled>
     );
}
 
export default Card;