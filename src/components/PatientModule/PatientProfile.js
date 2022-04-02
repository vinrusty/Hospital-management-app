import React,{useState, useEffect} from 'react'
import './PatientProfile.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SimpleToast } from '../util/Toast'
import { useNavigate } from 'react-router-dom'

function PatientProfile() {

    const [patient, setPatient] = useState({})
    const [pres, setPres] = useState([])
    const [doc, setDoc] = useState([])
    const [toast, setToast] = useState(false)
    const [assignedDoc, setAssignedDoc] = useState('')
    const [openError, setOpenError] = useState(false)
    const [deleteToast, setDeleteToast] = useState(false)
    const [openDeleteError, setOpenDeleteError] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPatient = async() =>{
            try{
                const Patient = await axios.get(`http://localhost:3000/patients-module/patient-profile/${id}`)
                const retrievedPatient = await Patient.data
                setPatient(retrievedPatient)
            }
            catch(err){
                console.log("could'nt fetch")
            }
        }
        fetchPatient()
    },[])

    useEffect(() => {
        const fetchPrescription = async() => {
            try{
                const Prescription = await axios.get(`http://localhost:3000/prescription/${id}`)
                const retrievedPrescription = await Prescription.data
                setPres(retrievedPrescription)
                console.log(retrievedPrescription)
            }
            catch(err){
                console.log('no prescription')
            }
        }
        fetchPrescription()
    },[])

    useEffect(() => {
        const fetchDoctors = async () => {
            try{
                const Doctor = await axios.get(`http://localhost:3000/doctors-list/all`)
                const retrievedDoctors = await Doctor.data
                setDoc(retrievedDoctors)
            }
            catch(err){
                console.log('No doctors')
            }
        }
        fetchDoctors()
    }, [])

    const handleAssignDoctors = async (event) => {
        console.log(event.target.id)
        try {
            const data = await axios.patch(`http://localhost:3000/assign-doctor/${id}`,
                            {
                                assignedDoctors: event.target.value
                            })
            const message = await data.data;
            if (message.message === 'success') {
                setToast(true)
                setAssignedDoc(message.result)
            }
            else {
                setOpenError(true)
            }
        }
        catch(err) {
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
    const handleDeleteToast = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setDeleteToast(false);
    }
    const handleDeleteErrorToast = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpenDeleteError(false);
    }
    const handleDischargeButton = async () => {
        var conf = window.confirm('Are you sure that you want to discharge this patient?')
        if(conf){
            try {
                const data = await axios.delete(`http://localhost:3000/prescription/${id}`)
                const message = await data.data;
                console.log(message)
                if(message === 'success') {
                    setDeleteToast(true)
                    navigate('/patients-module/patients-list')
                }
                else {
                    setOpenDeleteError(true)
                }
            }
            catch(err) {
                setOpenDeleteError(true)
            }
        }
    }
    console.log(pres)
    return (
        <div className='patient-profile-wrapper'>
            <div className='patient-details-wrapper'>
                <div className='patient-image'>
                    <img src='/images/face.jpg' alt='patient-image' />
                    <h3>{patient.name}</h3>
                    <h3>@ {patient.patient_id}</h3>
                </div>
                <div className='patient-details'>
                    <h1>Patient Details</h1>
                    <div className='patient-details-card mt-4'>
                        <h3>Name - {patient.name} </h3>
                        <h3>Age - {patient.age} </h3>
                        <h3>Email - {patient.email} </h3>
                        <h3>Phone - {patient.phone} </h3>
                        <h3>Blood Group - {patient.blood_group}</h3>
                        <h3>Ailment - {patient.ailment} </h3>
                    </div>
                </div>
            </div>
            <div className='prescriptions-wrapper p-4'>
              <div className='doctors-assignment'>
                    <select className='select-option' onChange={handleAssignDoctors}>
                        <option>Doctors</option>
                        {
                            doc && doc.map((d, index) => {
                                return (
                                    <option key={index} value={`${d.name}-${d.doctorid}`}>{d.name}-{d.type}</option>
                                )
                            })
                        }
                    </select>
                    {   
                        patient.assignedDoctors !== '' ? 
                        <>
                        <h3 className='mt-4'>Assigned Doctor:</h3>
                        <div class="team">
                            <div class="team_member shadow">
                                <div class="team_img">
                                    <img src="http://images6.fanpop.com/image/photos/37000000/-tbbt-Raj-Koothrappali-the-big-bang-theory-37049750-590-574.jpg" />
                                </div>
                            <h3>Dr. {patient.assignedDoctors}</h3>
                            <div class="button0 mt-2">
                                <a class="button1">Read more</a>
                            </div>
                            </div>
                        </div>
                        </>
                        :
                        <h3 className='mt-4'>No Doctors assigned yet!</h3>
                    }
                    </div>
                <div className='prescription-history'>
                {
                    pres.length !== 0 ?
                    <>
                    <h3>Prescriptions:</h3>
                    {
                        pres && pres.map((p, index) => {
                            return(
                                <div className='mt-4' key={index}>
                                <h4 className='mt-3'>Date: {p.date}</h4>
                                <h4 className='mt-3'>Patient ID: {p.patient_id}</h4>
                                <h4 className='mt-3'>Patient Name: {p.patient_name}</h4>
                                <h4 className='mt-3'>Prescription: {p.prescription}</h4>
                                </div>
                            )
                        })
                    }
                    <button className='butn mt-3' onClick={handleDischargeButton}>Discharge</button>
                    </>
                    :
                    <div className='notfound'>
                        <img src="/images/notfound.jpeg" />
                        <h3 className='mt-3'>No prescription yet!</h3>
                    </div>
                }
                </div>
            </div>
            <SimpleToast
            open={toast}
            message="Successfully assigned the Doctor"
            handleCloseToast={handleToast}
            severity="success"
            />
            <SimpleToast
            open={openError}
            message="Could not assign the doctor. Try again!"
            handleCloseToast={handleErrorToast}
            severity="error"
            />
            <SimpleToast
            open={deleteToast}
            message="Discharged the patient"
            handleCloseToast={handleDeleteToast}
            severity="success"
            />
            <SimpleToast
            open={openDeleteError}
            message="Could not discharge the patient. Try again!"
            handleCloseToast={handleDeleteErrorToast}
            severity="error"
            />
        </div>
    )
}

export default PatientProfile
