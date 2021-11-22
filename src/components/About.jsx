import React from 'react'
import Common from '../components/Common'
import about from "../Lotties/75082-dashboard.json"
const About = () => {
    return (
        <div>
            <Common head="Welcome To About Page Of"
                imgsrc={about}
                visit="/contact"
                btname="Contact Now" />
        </div>
    )
}

export default About
