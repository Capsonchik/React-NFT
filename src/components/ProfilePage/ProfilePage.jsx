import {CardProfile } from './cardProfile/CardProfile'
import { Navigation } from './navigatoin/Navigation'
import { StyledProfilePage } from "./ProfilePage.styled"
import {ContainerFlex, ContainerFlexColumn} from '../GlobalStyles/Global.styled'
import { SectionSlider } from "./sectionSlider/SectionSlider"
import { CollectionProduct } from './collectionProduct/collectionProduct'




export const ProfilePage = () => {
    return(
        <StyledProfilePage>
           <SectionSlider />
            <ContainerFlex>
                <CardProfile />
                <ContainerFlexColumn>
                    <Navigation />
                    <CollectionProduct/>
                </ContainerFlexColumn>
         
            </ContainerFlex> 
        </StyledProfilePage>
    )
}