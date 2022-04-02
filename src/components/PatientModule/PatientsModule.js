import React from 'react'
import { Link } from 'react-router-dom'
import './PatientsModule.css'

function PatienModule() {
    return (
        <div className='father-wrapper'>
           <div className='patient-module-wrapper'>
            <header class="bg-dark py-5 head-wrapper">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="welcome display-5 fw-bolder text-white mb-2">Welcome</h1>
                            <p class="lead text-white-50 mb-4">Feel free to access your health reports and stats.<br/>
                                Serving you as always!
                            </p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link to='/patient-register' class="btn btn-primary btn-lg px-4 me-sm-3">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="py-5 border-bottom" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <Link to='/patients-module/emergency-ward' class="col-lg-4 p-4 shadow">
                        <div>
                            <h2 class="h4 fw-bolder">Patients in Emergency Ward</h2>
                            <p>Get access to list of patients under special care.</p>
                            <a class="text-decoration-none" href="#!">
                                View Details
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </Link>
                    <div class="col-lg-4 mb-5 mb-lg-0 p-4 shadow">
                        <h2 class="h4 fw-bolder">Cardiovascular Health</h2>
                        <p>A healthy heart is central to overall good health. Embracing a healthy lifestyle at any age can prevent heart disease and lower your risk for a heart attack or stroke.</p>
                        <a class="text-decoration-none" href="https://medvisit.io/the-importance-of-cardiovascular-health/">
                            View Details
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <Link to='/patients-module/patients-list' class="col-lg-4 p-4 shadow">
                        <div>
                            <h2 class="h4 fw-bolder">Patients List</h2>
                            <p>The profile gives you insight into your account. Get access to personal details furnished at the time of admission.</p>
                            <a class="text-decoration-none" href="#!">
                                View Details
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        <section class="bg-light py-5 mt-2 head-wrapper">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">Feedback</h2>
                    <p class="lead mb-0">We'd love to hear from you</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                                <label for="message">Review</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                    
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            
                            <div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
           </div>
           </div>
    )
}

export default PatienModule
