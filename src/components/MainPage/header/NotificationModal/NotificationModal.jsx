import { BtnModal, StyledNotificationModal } from "./Notification.styled"
import dot from "./modalImg/modalBlueDot.png"
import sale from '../../../State/sale.json'




export const NotificationModal = ({showModal, setShowModal}) => {
    const data = sale.map(el => {
      return(
        <div className="products-card">
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
            {<div className={showModal ? 'modal-popup-active' : 'modal-popup'}>
                <div className="header-modal">
                    <span>Notification</span>
                    <BtnModal>See all</BtnModal>
                </div>
                {data}
            </div>}
        </StyledNotificationModal>

    )
}
