import React,{useState} from 'react'
import video from '../../video/video.mp4'
import { Button } from '../ButtonElements'
import {
    SectionContainer,
    Item,
    Video,
    SubContainer,
    SectionTe,
    ContainerBtn,
    ArrowForward,
    ArrowRight
} from './SectionElements'


const Section = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <div>
        <SectionContainer id="Presentacion">
            <Item>
                <Video autoPlay loop muted src={video} type='video/mp4' ></Video>
            </Item>
            <SubContainer>
                <SectionTe>HOLA COMO ESTAS</SectionTe>
            
                <ContainerBtn>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover} 
                    primary="true"
                    dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />} 
                    </Button>
                </ContainerBtn>
            </SubContainer>
        </SectionContainer>
    </div>
  )
}

export default Section