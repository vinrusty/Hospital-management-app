import React from 'react'
import './PatientCard.css'

function PatientCard() {
    return (
        <div class='container row mt-4 shadow patient-card'>
            <div className='col'>
                <h4>Patient name</h4>
            </div>
            <div className='col'>
                <h4>Patient ID</h4>
            </div>
            <div className='col'>
                <h4>Date joined</h4>
            </div>
            <div className='col'>
                <h4>Time joined</h4>
            </div>
        </div>
    )
}

export default PatientCard
