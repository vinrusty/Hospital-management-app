import React from 'react';

function ProvisionalDiagnosis() {
  return (
    <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 align-items-center my-5 shadow p-4">
        <div class="col-lg-5">
            <h2 class="font-weight-light">Provisional Diagnosis</h2>
            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
            <a class="btn btn-primary" href="#!">Print Diagnosis Summary</a>
        </div>
    </div>

    <div class="row gx-4 gx-lg-5">
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Prescription Form</h2>
                    <p class="card-text">Get medicine prescriptions based on consultation with our doctors.</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">View</a></div>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Emergency Ward Registration Form</h2>
                    <p class="card-text">Fill out the emergency registration form for immediate admission into the Intensive Care Unit(ICU).</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">View</a></div>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Main Profile</h2>
                    <p class="card-text">Find detailed patient records tabulated as per patient's convenience. </p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">View</a></div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ProvisionalDiagnosis;
