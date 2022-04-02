import axios from 'axios';
import React,{useState} from 'react';
import { SimpleToast } from '../util/Toast';
import './Prescription.css';

function EmergencyWard() {

  const [name, setName] = useState('')
  const [bloodgroup, setBloodgroup] = useState('')
  const [gender, setGender] = useState('')
  const [contact, setContact] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [patientid, setPatientId] = useState('')
  const [toast, setToast] = useState(false)
  const [openError, setOpenError] = useState(false)

  const handlePatientName = (e) =>{
    setName(e.target.value)
  }
  const handlePatientId = (e) => {
      setPatientId(e.target.value)
  }
  const handleBloodgroup = (e) =>{
    setBloodgroup(e.target.value)
  }
  const handleGender = (e) =>{
    setGender(e.target.value)
  }
  const handleContact = (e) =>{
    setContact(e.target.value)
  }
  const handleSymptoms = (e) =>{
    setSymptoms(e.target.value)
  }

  const handleEmergencyRegistration = async() => {
      try{
          const data = await axios.post('http://localhost:3000/emergency-ward-registration',
                        {
                            patient_name: name,
                            patient_id: patientid,
                            blood_group: bloodgroup,
                            gender: gender,
                            contact: contact,
                            symptoms: symptoms
                        },
                        {
                            headers: {'Content-Type':'application/json'}
                        })
            const emergencyPatient = await data.data
            if(emergencyPatient){
                setToast(true)
            }
            else{
                setOpenError(true)
            }
      }
      catch(err){
          setOpenError(true)
          console.log(err)
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
    <div class="page-wrapper bg-dark p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
                <div class="card card-6">
                    <div class="card-heading">
                        <h2 class="title">Emergency Ward Registration Form</h2>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="form-row">
                                <div class="name">Patient Name</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="name" onChange={handlePatientName}/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Patient ID</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="id" onChange={handlePatientId}/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Blood Group</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-6" type="text" name="bloodgroup" onChange={handleBloodgroup}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Gender</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-6" type="text" name="gender" placeholder="Male/Female/Other" onChange={handleGender}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Emergency Contact Number</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-6" type="text" name="contact" onChange={handleContact} />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Patient Allergies/Tendencies</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea onChange={handleSymptoms} class="textarea--style-6" name="symptoms" placeholder="List allergies/condition(s) that the patient if suffering from(if any)"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    <div class="card-footer">
                        <button class="btn btn--radius-2 btn--blue-2" onClick={handleEmergencyRegistration}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <SimpleToast
        open={toast}
        message="Successfully Registered the Patient"
        handleCloseToast={handleToast}
        severity="success"
        />
        <SimpleToast
        open={openError}
        message="Could not register the patient. Try again!"
        handleCloseToast={handleErrorToast}
        severity="error"
        />
        </div>
  );
}

export default EmergencyWard;
