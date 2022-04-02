import React from 'react'
import { Link } from 'react-router-dom'

function DoctorsModule() {
    return (
        <div>
            <header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <h1 class="display-5 fw-bold">Doctor's Module</h1>
                        <p class="fs-4">View Doctors</p>
                        <a class="btn btn-primary btn-lg" href="/doctors-module/doctors-list">Doctor's list</a>
                    </div>
                </div>
            </div>
            </header>
            <section class="pt-4">
            <div class="container px-lg-5">
                <div class="row gx-lg-5">
                    <div class="col-lg-10 col-xxl-4 mb-5">
                    <Link to='/doctors-module/prescription'>
                        <div class="card bg-light border-20 h-100 p-4 shadow rounded">
                            <div class="card-body text-center p-4 p-lg-10 pt-0 pt-lg-0">
                                <h2 class="fs-4 fw-bold">Prescription Request</h2>
                                <p class="mb-0">Prescribe medicines based on consultation with the patient</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <Link to='/doctors-module/emergency-ward-registration' class="col-lg-6 col-xxl-4 mb-5">
                        <div>
                            <div class="card bg-light border-20 h-100 p-4 shadow rounded">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 class="fs-4 fw-bold">Emergency Ward Registration</h2>
                                    <p class="mb-0">Register the patient to make arrangements for Emergency procedures</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/doctors-module/register' class="col-lg-6 col-xxl-4 mb-5">
                        <div>
                            <div class="card bg-light border-20 h-100 p-4 shadow rounded">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 class="fs-4 fw-bold">Doctors Registration</h2>
                                    <p class="mb-0">Register talented and excellent doctors from around the world</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        </div>
    )
}

export default DoctorsModule
