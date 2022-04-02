import axios from 'axios'
import React,{useState} from 'react'
import { SimpleToast } from '../util/Toast'

function DoctorRegistration() {
    const [docid, setDocid] = useState('') 
    const [docname, setDocname] = useState('') 
    const [spl, setSpl] = useState('') 
    const [email, setEmail] = useState('') 
    const [phone, setPhone] = useState('')
    const [toast, setToast] = useState(false)
    const [openError, setOpenError] = useState(false)

    const handleDocId = (e) =>{
        setDocid(e.target.value)
    }
    const handleDocName = (e) =>{
        setDocname(e.target.value)
    }
    const handleSpl = (e) =>{
        setSpl(e.target.value)
    }
    const handleDocEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleDocPhone = (e) =>{
        setPhone(e.target.value)
    }

    const handleSubmitForm = async() => {
        try{
            const newDoctor = await axios.post('http://localhost:3000/doctor-register',
            {
                name: docname,
                doctorid: docid,
                type: spl,
                phone: phone,
                email: email
            },
            {
                headers: {'Content-Type':'application/json'}
            })
            if(newDoctor.data.name){
                setToast(true)
            }
            else{
                setOpenError(true)
            }
        }
        catch(err){
            setOpenError(true)
        }
    }

    const handleToast = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setToast(false);
    }
    const handleErrorToast = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpenError(false);
    }
    
  return (
      <>
    <div class="page-wrapper bg-dark p-t-100 p-b-50" id='blur'>
        <div class="wrapper wrapper--w900">
            <div class="card card-6">
                <div class="card-heading">
                    <h2 class="title">Doctor's Registration form</h2>
                </div>
                <div class="card-body">
                    <div>
                        <div class="form-row">
                            <div class="name">Doctor's Name</div>
                            <div class="value">
                                <input onChange={handleDocName} class="input--style-6" type="text" name="full_name"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Doctor's ID</div>
                            <div class="value">
                                <div class="input-group">
                                    <input onChange={handleDocId} class="input--style-6" type="text" name="doctor-id" placeholder="HMS19C5666"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                        <div className='name'>Type of Ailment</div>
                            <div className='mb-3'>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="covid-19" value="covid-19" onClick={handleSpl}/>
                            <label class="form-check-label" for="covid-19">Covid-19</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="cardiovascular" value="cardiovascular" onClick={handleSpl}/>
                            <label class="form-check-label" for="cardiovascular">Cardiovascular</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="neurological" value="neurological" onClick={handleSpl}/>
                            <label class="form-check-label" for="neurological">Neurological</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="diabetes" value="diabetes" onClick={handleSpl}/>
                            <label class="form-check-label" for="diabetes">Diabetes</label>
                            </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Doctor's Email</div>
                            <div class="value">
                                <div class="input-group">
                                    <input onChange={handleDocEmail} class="input--style-6" type="email" name="email"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Doctor's Phone</div>
                            <div class="value">
                                <div class="input-group">
                                    <input onChange={handleDocPhone} class="input--style-6" type="text" name="phone"/>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" type="submit" onClick={handleSubmitForm}>Submit</button>
                </div>
        </div>
    </div>
    </div>
</div>
<SimpleToast
open={toast}
message="Successfully Registered the Doctor"
handleCloseToast={handleToast}
severity="success"
/>
<SimpleToast
open={openError}
message="Could not register the doctor. Try again!"
handleCloseToast={handleErrorToast}
severity="error"
/>
</>
  )
}

export default DoctorRegistration