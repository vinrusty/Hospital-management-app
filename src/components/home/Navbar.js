import React from 'react'
import {Link} from 'react-router-dom'
import Login from '../auth/login'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Hospital Management System</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link to='/doctors-module' class="nav-link active" aria-current="page">Doctor</Link></li>
                        <li class="nav-item"><Link to='/patients-module' class="nav-link">Patient</Link></li>
                        <li class="nav-item"><Link to='/' class="nav-link">Emergency Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
