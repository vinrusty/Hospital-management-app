import React from 'react'
import {Link} from 'react-router-dom'
import Login from './auth/login'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-container">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-items">
                <Link to='#' class="nav-link" aria-current="page">Home</Link>
                <Link to='#' class="nav-link">Doctor's Module</Link>
                <Link to='#' class="nav-link">Patient's module</Link>
                <Link to='/login'>
                <button className='btn btn-primary mx-2 login-btn'>Login</button>
                </Link>
                
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
