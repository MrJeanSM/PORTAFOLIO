import React from 'react'
/* import { Button } from 'react-scroll' */
import {
    InfoContainer,
    InfoWraper,
    InfoRow,
/*     Colum1,
    TextWraper,
    Heading,
    SubTitle,
    BtnWrap */
} from './InfoElements'

const InfoSection = () => {
  return (
    <div>
        <InfoContainer id="Formacion">
            <InfoWraper>
                <InfoRow>
                    {/* <Colum1>
                        <TextWraper>Hola Como estas</TextWraper>
                        <Heading>Heading</Heading>
                        <SubTitle>SubTitle</SubTitle>
                        <BtnWrap>
                            <Button to="home">Button</Button>
                        </BtnWrap>
                    </Colum1> */}
                </InfoRow>
            </InfoWraper>
        </InfoContainer>
    </div>
  )
}

export default InfoSection