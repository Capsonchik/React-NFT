import { BtnModal, StyledNotificationModal } from "./Notification.styled"
import dot from "./modalImg/modalBlueDot.png"
import sale from '../../../State/sale.json'




export const NotificationModal = ({showModal}) => {
    const data = sale.map(el => {
      return(
        <div key={el.id} className="products-card">
            <div className="info-card">
                <img className="img" src={el.img} alt="cardModalOne" />
                <div className="modal-text">
                    <p className="modal-title">ETH received</p>
                    <p className="modal-subtitle">{el.price} ETH recived</p>
                    <span>{el.day} days ago</span>
                </div>
            </div>
            <img src={dot} alt="dot" />
        </div>
        )
    })


    return(
        <StyledNotificationModal >
             
            {<div className={showModal ? 'modal-popup-active block' : 'modal-popup'}>
               
                    <div className="header-modal">
                        <span>Notification</span>
                        <BtnModal>See all</BtnModal>
                    </div>
                    {data}
                
      
            </div>}
        </StyledNotificationModal>

    )
}
