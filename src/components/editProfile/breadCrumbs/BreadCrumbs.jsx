import { Container, FlexBox } from "../../GlobalStyles/Global.styled"
import {Link} from "react-router-dom"


export const BreadCrumbs = () => {
    return (
        <Container>
            <FlexBox>
                <div className="btn-back__wrapper">
                    <button>Back to profile</button>
                </div>
                <div>
                    <Link>Profile</Link>
                    <Link>Edit Profile</Link>
                </div>
            </FlexBox>
        </Container>
    )
}