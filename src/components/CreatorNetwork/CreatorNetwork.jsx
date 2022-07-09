import StyledCreatorNetwork from './CreatorNetwork.styled'
import { Container } from '../GlobalStyle/Styled.Global'

import imgNft from './img/img-nft-1.jpg'
import eth from './img/eth.png'
import userMini from './img/user-mini-foto-1.png'

const CreatorNetwork = () => {

  return (
    <Container>
      <StyledCreatorNetwork>
        <div className='creator-network'>
          <img className='creator-network__img' src={imgNft} alt="nft"/>
          <div className='creator-network__block-info'>

            <div className='creator-info'>
              <h2 className='creator-info__title'>the creator network®</h2>

              <div className='creator-man'>
                <div className='creator-man__block'>
                  <img className='creator-man__img' src={userMini} alt='creator'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Creator</p>
                    <p className='creator-man__nickname'>Enrico Cole</p>
                  </div>
                </div>

                <div className='creator-man__block'>
                  <img className='creator-man__img' src={eth} alt='logo-ETH'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Instant price</p>
                    <p className='creator-man__nickname'>3.5 ETH</p>
                  </div>
                </div>
              </div>

            </div>

            <div className='creator-current-bid'>
              <h4 className='creator-current-bid__text'>Current Bid</h4>
              <h3 className='creator-current-bid__price-eth'>1.00 ETH</h3>
              <p className='creator-current-bid__price-dolar'>$3,618.36</p>
              <h4 className='creator-current-bid__text'>Auction ending in</h4>

              <div className='creator-current-bid__block-time'>

                <div className='creator-current-bid__auction-ending'>
                  <p className='creator-current-bid__time'>19</p>
                  <p className='creator-current-bid__time-text'>Hrs</p>
                </div>

                <div className='creator-current-bid__auction-ending'>
                  <p className='creator-current-bid__time'>24</p>
                  <p className='creator-current-bid__time-text'>mins</p>
                </div>

                <div className='creator-current-bid__auction-ending'>
                  <p className='creator-current-bid__time'>19</p>
                  <p className='creator-current-bid__time-text'>secs</p>
                </div>

              </div>
            </div>

            <button className='creator-button__place-bid'>Place a bid</button>
            <button className='creator-button__view-item'>View item</button>

          </div>
        </div>
      </StyledCreatorNetwork>
    </Container>
  )
}

export default CreatorNetwork