import { SellersBlock } from "./Sellers.styled";
import { Users } from "../../State/Users";
import AddButton from './Images/Add.png';
import InviteButton from './Images/OpenArrow.png'

const Sellers = () => {

    const MapUsers = Users.map(el => {
        return(
            <div key={el.id} className='user'>
                <div className='user__top'>
                    <div className='user__top-achivments'>
                        #{el.id}
                    </div>
                    <div className='user__top-invite'>
                        <img src={AddButton} alt="addbutton" />
                    </div>
                    <div className='user__top-open'>
                        <img src={InviteButton} alt="inviteButton" />
                    </div>
                </div>
                <img className='user__photo' src={el.photo} alt='photo'/>
                <p className='user__name'>{el.name}</p>
                <p className='user__balanse'>{el.balance} <span className='user__balanse-currensy'>ETH</span></p>
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