import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './PatientCard.css'

function PatientCard() {

    const [patients, setPatients] = useState([])
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                
                const data = await axios.get("http://localhost:3000/patients-module/patients-list")
                const Patients = await data.data
                setPatients(Patients)
            }
            catch(err){
                setPatients(null)
            }
        }
        fetchData()
    },[])

    return (
        <div className='patient-card-wrapper'>
            <h2 class='mt-4'>Patients List</h2>
            <div class='container row mt-4 shadow patient-card-header'>
                <div className='col'>
                    <h4>Patient name</h4>
                </div>
                <div className='col'>
                    <h4>Patient ID</h4>
                </div>
                <div className='col'>
                    <h4>Date joined</h4>
                </div>
                <div className='col'>
                    <h4>Time joined</h4>
                </div>
            </div>
            {
                patients && patients.map((patient, index) => {
                    return (
                        <div key={index} class='container row shadow patient-card'>
                            <div className='col'>
                                <h4>{patient.name}</h4>
                            </div>
                            <div className='col'>
                                <h4>{patient._id}</h4>
                            </div>
                            <div className='col'>
                                <h4>{patient.joined_date}</h4>
                            </div>
                            <div className='col'>
                                <h4>{patient.joined_time}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PatientCard
