import React from 'react'

function Patientform() {
    return (
        <div className='container patient-form'>
            <form>
            <div class="mb-3 row">
                <div className='col'>
                    <label for="FirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="FirstName"/>
                </div>
                <div className='col'>
                    <label for="LastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="LastName"/>
                </div>
            </div>
            <div class="mb-3">
                <label for="Address" class="form-label">Address</label>
                <input type="text" class="form-control" id="Address"/>
            </div>
            <div class="mb-3 row">
                <div className='col'>
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className='col'>
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="age"/>
                </div>
            </div>
            <label for='bloodgroup' class='form-label'>Blood group</label>
            <div className='mb-3'>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">O+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">A+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label class="form-check-label" for="inlineRadio3">B+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
            <label class="form-check-label" for="inlineRadio4">AB+</label>
            </div>
            </div>
            <label class='form-label' for='symtoms-text'>Symptoms of the patient</label>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            <button type="submit" class="btn btn-primary m-1">Submit</button>
            <button type="reset" class="btn btn-primary m-1">Reset</button>
            <div class="input-group">
            {/* <span class="input-group-text">With textarea</span> */}
            </div>
            </form>
        </div>
    )
}

export default Patientform
