import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const SectionContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;
`

export const Item = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Video = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const SubContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 99;
`

export const SectionTe = styled.h3`
    color: white;
    font-size: 28px;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
`

export const ContainerBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

