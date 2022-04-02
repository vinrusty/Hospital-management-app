import React,{useState, useEffect} from 'react'
import './PatientProfile.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function DoctorsProfile() {

    const [doc, setDoc] = useState([])
    const [toast, setToast] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchDoctor = async () => {
            try{
                const Doctor = await axios.get(`http://localhost:3000/doctor/${id}`)
                const retrievedDoctors = await Doctor.data
                setDoc(retrievedDoctors)
            }
            catch(err){
                console.log('No doctor')
            }
        }
        fetchDoctor()
    }, [])

    return (
        <div class='patient-profile-wrapper'>
            <div className='patient-details-wrapper'>
                <div className='patient-image'>
                    <img src='/images/face.jpg' alt='patient-image' />
                    <h3>{doc.name}</h3>
                    <h3>@ {doc.doctorid}</h3>
                </div>
                <div className='patient-details'>
                    <h1>Doctor Details</h1>
                    <div className='patient-details-card mt-4'>
                        <h3>Name - {doc.name} </h3>
                        <h3>ID - {doc.doctorid} </h3>
                        <h3>Email - {doc.email} </h3>
                        <h3>Phone - {doc.phone} </h3>
                        <h3>Specialization - {doc.type}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsProfile
