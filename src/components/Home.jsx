import React from 'react'
import Common from '../components/Common'
import home from "../Lotties/rocket.json"

const Home = () => {
    return (
        <div>
            <Common head="Grow Your Business With"
                imgsrc={home}
                visit="/contact"
                btname="Get Started" />
        </div>
    )
}

export default Home
