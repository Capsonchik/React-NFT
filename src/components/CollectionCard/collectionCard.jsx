import { CollectionCardStyled } from "./collectionCard.styled";

const CollectionCard = () => {
    return (  
        <CollectionCardStyled>
            <img src="img/cardCollection//col4.png" alt="bird" />
            <div className="collections__items">
                <div className="collections__item">
                    <img src="img/cardCollection//col2.png" alt="bird" />
                </div>
                <div className="collections__item">
                    <img src="img/cardCollection//col3.png" alt="bird" />
                </div>
                <div className="collections__item">
                    <img src="img/cardCollection//col1.png" alt="bird" />
                </div>
            </div>
            <p className="collections__name">Awesome collection</p>
            <div className="collections__owner">
                <img src="img/userPhoto/01.png" alt="avatar" />
                <div className="collections__owner-summary">28 items</div>
            </div>
        </CollectionCardStyled>
    );
}
 
export default CollectionCard;