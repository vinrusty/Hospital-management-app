import React from 'react'

function PatientProfile() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className="col-4 card bg-light crd">
                    <img className='mt-5 card-img' src="/images/face.jpg" alt="" />
                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                    <h5 className="card-title mb-3">Patient Name</h5>
                    <h5 className="card-subtitle mb-5 text-secondary">Patient ID</h5>
                </div>
                </div>
                <div class="col card crd2">
                <div class="card-body">
                <ul class="list-group list-group-flush p-4">
                    <li class="list-group-item row">
                        <div className='row'>
                        <h5 className='col-4'>Name</h5>
                        <p className='col'>Peter Griffin</p>
                        </div>
                    </li>
                    <li class="list-group-item row">
                        <div className='row'>
                        <h5 className='col-4'>Email</h5>
                        <p className='col'>peter@familyguy.com</p>
                        </div>
                    </li>
                    <li class="list-group-item row">
                        <div className='row'>
                        <h5 className='col-4'>Phone</h5>
                        <p className='col'>453563353</p>
                        </div>
                    </li>
                    <li class="list-group-item row">
                        <div className='row'>
                        <h5 className='col-4'>Patient ID</h5>
                        <p className='col'>3489023423</p>
                        </div>
                    </li>
                    <li class="list-group-item row">
                        <div className='row'>
                        <h5 className='col-4'>Blood Group</h5>
                        <p className='col'>O+</p>
                        </div>
                    </li>
                </ul>
                </div>
                </div>
            </div>
            <div className='row mt-4 mb-4'>
                <div class="col-3 card">
                <div class="card-body">
                    <h4 className='text-center'>Doctors assigned</h4>
                <div className='p-4 shadow-sm'>
                    <h5 class="card-title">Dr. Shashwath PR</h5>
                    <p class="card-text">
                        Cardiologist
                    </p>
                    <a href="#" class="btn btn-primary">View Profile</a>
                </div>
                <div className='p-4 shadow-sm'>
                    <h5 class="card-title">Dr. Shashwath PR</h5>
                    <p class="card-text">
                        Cardiologist
                    </p>
                    <a href="#" class="btn btn-primary">View Profile</a>
                </div>
                </div>
                </div>
                <div class="col card crd2">
                <div class="card-body">
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile
