import { Container, FlexBox } from "../../GlobalStyles/Global.styled"
import {Link} from "react-router-dom"
import { StyledBreadCrumbs } from "./BreadCrumbs.styled"


export const BreadCrumbs = () => {
    return (
        <StyledBreadCrumbs>
            <Container>
                <FlexBox>
                    <div className="btn-back__wrapper">
                        <button className="btn-back__text">
                            <img className="btn-back__img" src='../img/arrow-left.png' alt="arrow"/>
                            Back to profile
                        </button>
                    </div>
                    <div className="link-bread__crumbs">
                        <Link to ='/profile' className="link-bread__text">Profile</Link>
                        <Link to='/profile/edit' className="link-bread__text-edit">Edit Profile</Link>
                    </div>
                </FlexBox>
            </Container>
        </StyledBreadCrumbs>
    )
}