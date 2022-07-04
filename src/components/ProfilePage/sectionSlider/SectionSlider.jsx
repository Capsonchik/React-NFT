import slider from '../ImagesProfile/image-profile-page-slider.png'
import frame from '../ImagesProfile/ShapeRamkaButton.png'
import buttonSvg from '../ImagesProfile/svg-button-profile.svg'
import buttonSvgEdit from '../ImagesProfile/svg-button-edite.svg'
import shape from '../ImagesProfile/Shape.jpg'
import { Button, EditButton } from './Button.styled.js'
import { WrapperButton } from './SectionWrapperButton.styled'


export const SectionSlider = () => {
    return(
        <div className='section-wrapper'>
            <img src={slider} alt='background' />
            <WrapperButton>
                <div className='button-wrapper'>
                    <Button>Edit cover photo
                    <img className='button-img' src={buttonSvg} alt="gallery" />
                    <img className='button-img__frame' src={frame} alt="frame" />
                    </Button>
                </div>
                <div className='button-wrapper__edit'>
                    <EditButton>Edit profile 
                        <img className='button-img' src={buttonSvgEdit} alt="pencil" />
                        <img className='button-img__shape' src={shape} alt="shape" />
                    </EditButton>
                </div>
            </WrapperButton>
        </div>
    )
}