import frame from '../ImagesProfile/ShapeRamkaButton.png'
import buttonSvg from '../ImagesProfile/svg-button-profile.svg'
import buttonSvgEdit from '../ImagesProfile/svg-button-edite.svg'
import shape from '../ImagesProfile/Shape.jpg'
import { Button, EditButton } from './Button.styled.js'
import { WrapperButton } from './SectionWrapperButton.styled'
import { Container } from '../../GlobalStyles/Global.styled'
import { FlexBtn } from '../sectionSlider/SectionWrapperButton.styled'


export const SectionSlider = () => {
    return(
        <WrapperButton>
            <Container>
                <FlexBtn>
                    <Button>Edit cover photo
                        <img className='button-img' src={buttonSvg} alt="gallery" />
                        <img className='button-img__frame' src={frame} alt="frame" />
                    </Button>
            
                    <EditButton>Edit profile 
                        <img className='button-img' src={buttonSvgEdit} alt="pencil" />
                        <img className='button-img__shape' src={shape} alt="shape" />
                    </EditButton>
            
                </FlexBtn>
                </Container>
        </WrapperButton>
   
    )
}