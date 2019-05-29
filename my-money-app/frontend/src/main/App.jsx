import '../common/template/dependences'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from '../main/Routes'
import Messages from '../common/msg/messages'

import React from 'react'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)