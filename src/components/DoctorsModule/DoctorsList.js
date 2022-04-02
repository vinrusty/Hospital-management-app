import React,{useState, useEffect} from 'react';
import './DoctorsList.css'
import axios from 'axios'

function DoctorsList() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const fetchDoctors = async() => {
            try{
                const data = await axios.get('http://localhost:3000/doctors-list/all')
                const fetchedDoctors = data.data
                console.log(fetchedDoctors)
                if(fetchDoctors.name){
                    setDoctors(fetchedDoctors)
                }
                else{
                    console.log(fetchedDoctors)
                }

            }
            catch(err){
                console.log(err)
            }
        }
        fetchDoctors()
    },[])
    console.log(doctors)
  return (
      <>
      {
        doctors.length !== 0 ?
        <>
        <h1>Our Doctors</h1>
        <div class="doctor-list-wrapper">
        {
            doctors && doctors.map((doctor, index) => {
                return(
                <div key={index} class="team">
                    <div class="team_member shadow">
                        <div class="team_img">
                            <img src="http://images6.fanpop.com/image/photos/37000000/-tbbt-Raj-Koothrappali-the-big-bang-theory-37049750-590-574.jpg" />
                        </div>
                    <h3>Dr. {doctor.name}</h3>
                    <p class="role">{doctor.doctorid}</p>
                    <p class="role1">{doctor.type}</p>
                    <div class="button0">
                        <a href={`/doctor-profile/${doctor.doctorid}`} class="button1">Read more</a>
                    </div>
                    </div>
                </div>
                )
            })
        }

        </div>
        </>
        :
        <div className='notfound'>
        <img src='/images/notfound.jpeg' alt='not found' />
        <h2>No doctors registered yet :(</h2>
        </div>
      }

      </>
  );
}

export default DoctorsList;
