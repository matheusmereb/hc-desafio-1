import React from 'react'
import Logo from './../assets/logo.png'

export default function Navbar() {
    return(
        <div className="navbar-div">
            <a href="#" className="nav-logo"><img src={Logo} alt="icon" style={{height: 40}} /></a>
        </div>
    )
}