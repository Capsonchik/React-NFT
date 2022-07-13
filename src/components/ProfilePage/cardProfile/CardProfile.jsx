import { Container } from '../../GlobalStyles/Global.styled'
import CardPhoto from '../ImagesProfile/card-profile.png'
import { BtnCard, BtnDownload, BtnMore, BtnSocial, StyledCardInfo } from './CardInfo.styled'
import { StyledCardProfile } from './CardProfile.styled'
import { Link } from 'react-router-dom'
import  filed  from '../ImagesProfile/card-filled.png'
import globe from "../ImagesProfile/card-globe.svg"
import shape from "../ImagesProfile/card-shape-btn.svg"
import vector from '../ImagesProfile/card-vector-btn.svg'
import twitter from "../ImagesProfile/card-twitter-btn.svg"
import instagram from "../ImagesProfile/card-instagram-btn.svg"
import facebook from "../ImagesProfile/card-facebook-btn.svg" 



export const CardProfile = () => {

    return(
        <div>
        <StyledCardProfile>
            <Container>
                <StyledCardInfo >
                    <img src={CardPhoto} alt="CardPhoto" />
                    <h1>Enrico Cole</h1>
                    <div>
                        <span>0xc4c16a645...b21a</span>
                        <img src={filed} alt="filed" />
                    </div>
        
                    <p>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</p>
                    <div className='card-link'>
                        <img src={globe} alt="globe" />
                        <Link to='#' className='card-link__text'>https://ui8.net</Link>
                    </div>

                    <div className='btn-wrapper'>
                        <BtnCard className='btnText'>Follow</BtnCard>
                        <BtnDownload><img src={shape} alt="shape" /></BtnDownload>
                        <BtnMore><img src={vector} alt="vector" /></BtnMore>
                    </div>

                    <div className='btn-social'>
                        <BtnSocial><img src={twitter} alt="twitter" /></BtnSocial>
                        <BtnSocial><img src={instagram} alt="instagram" /></BtnSocial>
                        <BtnSocial><img src={facebook}alt="facebook" /></BtnSocial>
                    </div>
                    <div className='history'>
                        <p>Member since Mar 15, 2021</p>
                    </div>
                </StyledCardInfo>
              
    
            </Container>
        </StyledCardProfile>
        </div>


    )
}