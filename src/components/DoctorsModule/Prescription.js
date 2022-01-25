import axios from 'axios';
import React,{useState, useEffect} from 'react';
import './Prescription.css'

function Prescription() {
  
    const [patientName, setPatientName] = useState('')
    const [patientId, setPatientId] = useState('')
    const [prescription, setPrescription] = useState('')

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
        try{
            const data = await axios.post('http://localhost:3000/prescription',
                            {patient_name: patientName, patient_id: patientId, prescription: prescription},
                            {
                                headers: {'Content-Type': 'application/json'}
                            }
                            )
            const savedPrescription = await data.data
        }
        catch(err){
            console.log(err)
        }
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
                                <input class="input--style-6" type="text" name="full_name"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Patient ID</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-6" type="email" name="email" placeholder="HMS19C5666"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Prescription</div>
                            <div class="value">
                                <div class="input-group">
                                    <textarea class="textarea--style-6" name="message" placeholder="Details of the prescribed medicines"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" type="submit">Download PDF</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Prescription;
