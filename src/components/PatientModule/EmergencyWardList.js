import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './PatientCard.css'

function EmergencyWardList() {

    const [patients, setPatients] = useState([])
    const [searchField, setSearchField] = useState('')
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                
                const data = await axios.get(`http://localhost:3000/emergencyward`)
                const Patients = await data.data
                setPatients(Patients)
            }
            catch(err){
                console.log("there was some error")
            }
        }
        fetchData()
    },[])

    const handleSearchFieldChange = (event) => {
        setSearchField(event.target.value)
    }
    
    const filteredPatients = patients.filter(patient =>{
        return patient.patient_name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div className='patient-card-wrapper'>
        {
            patients.length !== 0 ?
            <>
            <h2 class='mt-4'>Emergency Ward Patients List</h2>
            <div class="input-group mt-4 p-5">
                <input onChange={handleSearchFieldChange} type="search" class="form-control rounded" placeholder="Search for patient" aria-label="Search" aria-describedby="search-addon" />
            </div>
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
                filteredPatients && filteredPatients.map((patient, index) => {
                    return (
                        
                            <Link class='container row shadow patient-card' style={{width: "100%"}} key={index} to={`/patient-profile/${patient.patient_id}`}>
                            
                                <div className='col'>
                                    <h4>{patient.patient_name}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.patient_id}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.gender}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.contact}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.symptoms}</h4>
                                </div>
                            
                            </Link> 
                    )
                })
            }
            </>
            :
            <>
            <img src='/images/notfound.jpeg' alt='not found' />
            <h2 className='m-4'>No patients registered yet :(</h2>
            </>
        }
        </div>
    )
}

export default EmergencyWardList
