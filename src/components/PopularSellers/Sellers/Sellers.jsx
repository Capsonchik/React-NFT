import { SellersBlock } from "./Sellers.styled";
import { Users } from "../../State/Users";

const Sellers = () => {

    const MapUsers = Users.map(el => {
        return(
            <div className='user'>
                {el.id}
                {el.name}
            </div>
        )
    })
      
    
    return (
        <SellersBlock>
            <div className='sellers-wraper'>
                {MapUsers}
            </div>
        </SellersBlock>
    );
}
 
export default Sellers;