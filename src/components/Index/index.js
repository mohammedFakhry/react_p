import React from 'react'
import About from '../about'
import Contact from '../Contact'
import Error from '../Error'
import Profile from '../Profile'
import Protfolio from '../Protfolio'
import Service from '../Service'
import Work from '../Work'

const Index = () => {
    return (
        <div>
            <About />
            <Work />
            <Service />
            <Profile />
            <Protfolio />
        </div>
    )
}

export default Index