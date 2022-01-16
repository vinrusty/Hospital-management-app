import React from 'react'
import './FrontPage.css'

function FrontPage() {
    return (
        <div>
           <header class="py-5 bg-image-full header-img">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src="C:\Users\Sumukh Kashi\Downloads\hmslogo.png"width="100" height="200" alt="..." />
                
                <p class="text-white-70 mb-0">Serving you as always</p>
            </div>
        </header>
        <section class="py-5 about-us">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6 about-us-card shadow">
                        <h2>About Us</h2>
                        <p class="lead">HMS Health is proud to be among the most comprehensive healthcare systems in Bangalore. Our full continuum of care includes acute care hospital services, behavioral healthcare, acute rehabilitation, home care, hospice care, ambulatory surgery, and fitness and wellness services.</p>
                        <p class="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="py-5 bg-image-full back-img">
            <div class='height-fix'></div>
        </div>
        <section class="py-5 about-us">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6 about-us-card shadow">
                        <h2>Covid-19 Updates</h2>
                        <p class="lead">Download Aarogya Setu App and get vaccinated</p>
                        <p class="mb-0">Please bear with us for any inconvienience caused due to shortage in medical supplies.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default FrontPage
