import React,{ useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Toast } from 'bootstrap'

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
    let [toast, setToast] = useState(false)
    const toastRef = useRef()

    useEffect(() => {
        let myToast = toastRef.current
        let bsToast = Toast.getInstance(myToast)
        
        if (!bsToast) {
            // initialize Toast
            bsToast = new Toast(myToast, {autohide: false})
            // hide after init
            bsToast.hide()
            setToast(false)
        }
        else {
            // toggle
            toast ? bsToast.show() : bsToast.hide()
        }
    })

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
                                joined_date: currentDate.getDate()+"/"+currentDate.getMonth()+1+"/"+currentDate.getFullYear(),
                                joined_time: currentDate.getHours()+":"+currentDate.getMinutes()
                            },
                            {
                                headers: {'Content-Type':'application/json'}
                            })
            const registeredPatient = await data.data;
            if(registeredPatient){
                setTimeout(() => {
                    setToast(toast => !toast)
                }, 3000)
                setToast(toast => !toast)
            }
            else{
                console.log('could not register')
            }
        }
        catch(err){
            console.log('could not register')
        }
    }

    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e) =>{
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
        <>
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef} style={{background: "#4CB944", zIndex:"999"}}>
            <div class="toast-header">
            <strong class="mr-auto">Bootstrap</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="toast-body">
            Succesfully Registered!
            </div>
        </div>
        <div className='container shadow p-4 patient-form'>
            <div>
            <div class="mb-3 row">
                <div className='col'>
                    <label for="FirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="FirstName" onChange={handleFirstName}/>
                </div>
                <div className='col'>
                    <label for="LastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="LastName" onChange={handleLastName}/>
                </div>
            </div>
            <div class="mb-3">
                <label for="Address" class="form-label">Address</label>
                <input type="text" class="form-control" id="Address" onChange={handleAddress}/>
            </div>
            <div class="mb-3 row">
                <div className='col'>
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleEmail} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className='col'>
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="age" onChange={handleAge}/>
                </div>
            </div>
            <div class="mb-3">
                <label for="PhoneNumber" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="PhoneNumber" onChange={handlePhone}/>
            </div>
            <label for='bloodgroup' class='form-label'>Blood group</label>
            <div className='mb-3'>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="O+" value="O+" onClick={handleBloodgroup}/>
            <label class="form-check-label" for="O+">O+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="A+" value="A+" onClick={handleBloodgroup}/>
            <label class="form-check-label" for="A+">A+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="B+" value="B+" onClick={handleBloodgroup}/>
            <label class="form-check-label" for="B+">B+</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="AB+" value="AB+" onClick={handleBloodgroup}/>
            <label class="form-check-label" for="AB+">AB+</label>
            </div>
            </div>
            <label for='bloodgroup' class='form-label'>Type of Ailment</label>
            <div className='mb-3'>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="covid-19" value="covid-19" onClick={handleType}/>
            <label class="form-check-label" for="covid-19">Covid-19</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="cardiovascular" value="cardiovascular" onClick={handleType}/>
            <label class="form-check-label" for="cardiovascular">Cardiovascular</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="neurological" value="neurological" onClick={handleType}/>
            <label class="form-check-label" for="neurological">Neurological</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="diabetes" value="diabetes" onClick={handleType}/>
            <label class="form-check-label" for="diabetes">Diabetes</label>
            </div>
            </div>
            <label class='form-label' for='symtoms-text'>Symptoms of the patient</label>
            <textarea class="form-control" aria-label="With textarea" onChange={handleSymptom}></textarea>
            <button class="btn btn-primary m-1 my-3" onClick={handleSubmit}>Submit</button>
            <button class="btn btn-primary m-1 my-3">Reset</button>
            <div class="input-group">
            {/* <span class="input-group-text">With textarea</span> */}
            </div>
            </div>
        </div>
        </>
    )
}

export default Patientform
