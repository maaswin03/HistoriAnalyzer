import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav1'>
            <div className='nav2'>
                <div className='nav3 nav5'>
                    <p style={{ color: 'white' }}>HistoriXpert</p>
                </div>
                <div className='nav3 nav6'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/chatbot'>ChatBot</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar