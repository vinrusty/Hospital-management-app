import React,{ useState } from 'react'
import axios from 'axios'

function Patientform() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')
    const [type, setType] = useState('')
    const [symptom, setSymptom] = useState('')

    const handleSubmit = async(event) =>{
        try{
            event.preventDefault()
            const currentDate = new Date()
            const data = await axios.post('http://localhost:3000/patient-register',
                            { 
                                name: firstName+" "+lastName,
                                age: Number(age),
                                blood_group: bloodgroup,
                                ailment: type,
                                address: address,
                                email: email,
                                phone: phone,
                                symptom: symptom,
                                joined_date: currentDate.getDate()+"/"+currentDate.getMonth()+"/"+currentDate.getFullYear(),
                                joined_time: currentDate.getHours()+":"+currentDate.getMinutes() 
                            },
                            {
                                headers: {'Content-Type':'application/json'}
                            })
            const registeredPatient = await data.data;
        }
        catch(err){
            console.log('could not register')
        }
    }

    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLirstName = (e) =>{
        setLastName(e.target.value)
    }
    const handleAddress = (e) =>{
        setAddress(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleAge = (e) =>{
        setAge(e.target.value)
    }
    const handlePhone = (e) =>{
        setPhone(e.target.value)
    }
    const handleBloodgroup = (e) =>{
        setBloodgroup(e.target.value)
    }
    const handleType = (e) =>{
        setType(e.target.value)
    }
    const handleSymptom = (e) =>{
        setSymptom(e.target.value)
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
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
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
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="O+"/>
            <label class="form-check-label" for="inlineRadio1">O+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="A+"/>
            <label class="form-check-label" for="inlineRadio2">A+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="B+"/>
            <label class="form-check-label" for="inlineRadio3">B+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="AB+"/>
            <label class="form-check-label" for="inlineRadio4">AB+</label>
            </div>
            </div>
            <label for='bloodgroup' class='form-label'>Type of Ailment</label>
            <div className='mb-3'>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="covid-19"/>
            <label class="form-check-label" for="inlineRadio1">Covid-19</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="cardiovascular"/>
            <label class="form-check-label" for="inlineRadio2">Cardiovascular</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="neurological"/>
            <label class="form-check-label" for="inlineRadio3">Neurological</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="diabetes"/>
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
