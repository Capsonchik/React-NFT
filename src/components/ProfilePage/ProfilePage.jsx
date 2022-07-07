import {CardProfile } from './cardProfile/CardProfile'
import { Navigation } from './navigatoin/Navigation'
import { StyledProfilePage } from "./ProfilePage.styled"
import {ContainerForProfile} from '../GlobalStyles/Global.styled'
import { SectionSlider } from "./sectionSlider/SectionSlider"




export const ProfilePage = () => {
    return(
        <StyledProfilePage>
           <SectionSlider />
            <ContainerForProfile>
                <CardProfile />
                <Navigation />
            </ContainerForProfile> 
        </StyledProfilePage>
    )
}