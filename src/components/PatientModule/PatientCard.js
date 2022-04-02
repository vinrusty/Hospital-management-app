import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './PatientCard.css'

function PatientCard() {

    const [patients, setPatients] = useState([])
    const [searchField, setSearchField] = useState('')
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                
                const data = await axios.get(`http://localhost:3000/patients-module/patients-list/all`)
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
        return patient.name.toLowerCase().includes(searchField.toLowerCase())
    })

    const handleSelectChange = async (event) => {
        try{
                
            const data = await axios.get(`http://localhost:3000/patients-module/patients-list/${event.target.value}`)
            const Patients = await data.data
            setPatients(Patients)
            console.log(Patients)
        }
        catch(err){
            console.log("there was some error")
        }
    }

    return (
        <div className='patient-card-wrapper'>
        {
            patients.length !== 0 ?
            <>
            <h2 class='mt-4'>Patients List</h2>
            <div class="input-group mt-4 p-5">
                <input onChange={handleSearchFieldChange} type="search" class="form-control rounded" placeholder="Search for patient" aria-label="Search" aria-describedby="search-addon" />
                <select onChangeCapture={handleSelectChange} className='type-select'>
                    <option value='all'>All</option>
                    <option value='Covid-19'>Covid-19</option>
                    <option value='Cardiovascular'>Cardiovascular</option>
                    <option value='Neurological'>Neurological</option>
                    <option value='Diabetes'>Diabetes</option>
                </select>
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
                                    <h4>{patient.name}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.patient_id}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.joined_date}</h4>
                                </div>
                                <div className='col'>
                                    <h4>{patient.joined_time}</h4>
                                </div>
                            
                            </Link> 
                    )
                })
            }
            </>
            :
            <>
            <img src='/images/notfound.jpeg' alt='not found' />
            <h2>No patients registered yet :(</h2>
            </>
        }
        </div>
    )
}

export default PatientCard
