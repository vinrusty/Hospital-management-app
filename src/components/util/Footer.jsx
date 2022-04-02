import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer' className='footer-wrapper'>
        <img src='/images/health2.png' alt='logo' />
            <ul className='contacts'>
                <li>Phone:</li>
                <li>1800 4899 3322</li>
                <li>080 8333 8999</li>
                <li>Email:</li>
                <li>contacthms@hms.in</li>
            </ul>
    </div>
  )
}

export default Footer