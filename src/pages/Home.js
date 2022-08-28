import React, {useState} from 'react'
import InfoSection from '../Components/InfoSection';
import Navbar from '../Components/Navbar'
import Section from '../Components/Section';
import Sidebar from '../Components/Sidebar'

import { homeObject } from '../Components/InfoSection/Data'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Section />
        <InfoSection {...homeObject} />
        
    </div>
  )
}

export default Home