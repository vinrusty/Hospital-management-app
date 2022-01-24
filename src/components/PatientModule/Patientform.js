import React,{ useState } from 'react'
import axios from 'axios'

function Patientform() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')
    const [type, setType] = useState('')
    const [symptom, setSymptom] = useState('')

    const patient = {
        name,
        address,
        email,
        age,
        phone,
        bloodgroup,
        type,
        symptom
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3000/patient-register',{ patient },{
            headers: {'Content-Type':'application/json'}
        })
        .then(res => console.log(res))
        .catch(err => console.log('couldnt register!'))
    }

    return (
        <div className='container shadow p-4 patient-form'>
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
            <div class="mb-3">
                <label for="PhoneNumber" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="PhoneNumber"/>
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
            <label for='bloodgroup' class='form-label'>Type of Ailment</label>
            <div className='mb-3'>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Covid-19</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">Cardiovascular</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label class="form-check-label" for="inlineRadio3">Neurological</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
            <label class="form-check-label" for="inlineRadio4">Diabetes</label>
            </div>
            </div>
            <label class='form-label' for='symtoms-text'>Symptoms of the patient</label>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            <button type="submit" class="btn btn-primary m-1 my-3">Submit</button>
            <button type="reset" class="btn btn-primary m-1 my-3">Reset</button>
            <div class="input-group">
            {/* <span class="input-group-text">With textarea</span> */}
            </div>
            </form>
        </div>
    )
}

export default Patientform
