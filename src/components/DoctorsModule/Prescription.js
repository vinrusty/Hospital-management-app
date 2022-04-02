import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { SimpleToast } from '../util/Toast';
import './Prescription.css'

function Prescription() {
  
    const [patientName, setPatientName] = useState('')
    const [patientId, setPatientId] = useState('')
    const [prescription, setPrescription] = useState({})
    const [toast, setToast] = useState(false)
    const [openError, setOpenError] = useState(false)

    const handlePatientName = (e) =>{
        setPatientName(e.target.value)
    }
    const handlePatientId = (e) =>{
        setPatientId(e.target.value)
    }
    const handlePrescription = (e) =>{
        setPrescription(e.target.value)
    }

    const handlePrescriptionSumbit = async() =>{
        const date = new Date();
        try{
            const data = await axios.post('http://localhost:3000/prescription',
                            {
                                date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
                                patient_name: patientName, 
                                patient_id: patientId, 
                                prescription: prescription
                            },
                            {
                                headers: {'Content-Type': 'application/json'}
                            }
                            )
            const savedPrescription = await data.data
            setPrescription(savedPrescription)
            if(savedPrescription.patient_name){
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
                    <h2 class="title">Prescription Form </h2>
                </div>
                <div class="card-body">
                    <div>
                        <div class="form-row">
                            <div class="name">Patient Name</div>
                            <div class="value">
                                <input class="input--style-6" type="text" name="full_name" onChange={handlePatientName}/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Patient ID</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-6" type="email" name="email" placeholder="HMS19C5666" onChange={handlePatientId}/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Prescription</div>
                            <div class="value">
                                <div class="input-group">
                                    <textarea onChange={handlePrescription} class="textarea--style-6" name="message" placeholder="Details of the prescribed medicines"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" onClick={handlePrescriptionSumbit} type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <SimpleToast
    open={toast}
    message="Successfully Prescribed the Patient"
    handleCloseToast={handleToast}
    severity="success"
    />
    <SimpleToast
    open={openError}
    message="Could not prescribe the patient. Try again!"
    handleCloseToast={handleErrorToast}
    severity="error"
    />
    </div>
    );
}

export default Prescription;
