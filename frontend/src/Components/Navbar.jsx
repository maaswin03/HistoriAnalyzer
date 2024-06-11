import React from 'react'
import '../Components/Navbar.css'

function Navbar() {
    return (
        <div className='nav1'>
            <div className='nav2 nav3'>
                <span style={{color:'white',marginLeft: '5%' }}>HistoriAnalayzer</span>
            </div>
            <div className='nav2 nav4'>
                <a href="/">About</a>
                <a href="/dashboard">Features</a>
                <a href="/pricing" id="navbar">Contact</a>
            </div>
        </div>
    )
}

export default Navbar