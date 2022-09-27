import React from 'react'
import Navbar from './homeComps/Navbar'
import FirstSection from './homeComps/FirstSection'
import OneStepSection from './homeComps/OneStepSection'
import CcmSection from './homeComps/CcmSection'
import CalcDemoSection from './homeComps/CalcDemoSection'
import MissionsSection from './homeComps/MissionsSection'
import Calender from './homeComps/Calender'
import FondSection from './homeComps/FondSection'
import FAQSection from './homeComps/FAQSection'
import EndSection from './homeComps/EndSection'
import './styles/global.css'

function Home() {
    return (
        <div className="LandingPage">
            <body className="App-body">
                <Navbar />
                <FirstSection />
                <OneStepSection />
                <CcmSection />
                <CalcDemoSection />
                <MissionsSection />
                <Calender />
                <FondSection />
                <FAQSection />
                <EndSection />
            </body>
        </div>
    )
}

export default Home
