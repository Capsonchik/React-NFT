import { CardProfile } from './cardProfile/CardProfile'
import { StyledProfilePage } from "./ProfilePage.styled"
import { SectionSlider } from "./sectionSlider/SectionSlider"




export const ProfilePage = () => {
    return(
        <StyledProfilePage>
           <SectionSlider />
            <CardProfile />
        </StyledProfilePage>
    )
}