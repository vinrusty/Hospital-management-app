import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Patients Module</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Wards</p>
                
                <li>
                    <Link to='/patients-module/covid-19'>Covid-19</Link>
                </li>
                <li>
                    <Link to='/'>Diabetes</Link>
                </li>
                <li>
                    <Link to='/'>Cardiovascular</Link>
                </li>
                <li>
                    <Link to='/'>Neurosurgery</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
