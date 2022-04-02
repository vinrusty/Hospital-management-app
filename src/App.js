import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientform from './components/PatientModule/Patientform';
import PatientProfile from './components/PatientModule/PatientProfile';
import ContactForm from './components/PatientModule/ContactForm';
import './App.css';
import Navbar from './components/home/Navbar';
import FrontPage from './components/home/FrontPage';
import DoctorsModule from './components/DoctorsModule/DoctorsModule';
import PatientsModule from './components/PatientModule/PatientsModule';
import Covid from './components/PatientModule/Covid19-page/Covid';
import Prescription from './components/DoctorsModule/Prescription';
import DoctorsList from './components/DoctorsModule/DoctorsList';
import EmergencyWard from './components/DoctorsModule/EmergencyWard';
import PatientCard from './components/PatientModule/PatientCard';
import DoctorRegistration from './components/DoctorsModule/DoctorRegistration';
import DoctorsProfile from './components/DoctorsModule/DoctorsProfile';
import Footer from './components/util/Footer';
import EmergencyWardList from './components/PatientModule/EmergencyWardList';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<FrontPage/>} />
          <Route path='/doctors-module' element={<DoctorsModule/>} />
          <Route path='/doctors-module/prescription' element={<Prescription/>} />
          <Route path='/doctors-module/register' element={<DoctorRegistration/>} />
          <Route path='/doctors-module/doctors-list' element={<DoctorsList/>} />
          <Route path='/doctors-module/emergency-ward-registration' element={<EmergencyWard/>} />
          <Route path='/patients-module' element={<PatientsModule/>} />
          <Route path='/patients-module/patients-list' element={<PatientCard/>} />
          <Route path='/patients-module/covid-19' element={<Covid/>} />
          <Route path='/patient-profile/:id' element={<PatientProfile/>} />
          <Route path='/patient-register' element={<Patientform />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/doctor-profile/:id' element={<DoctorsProfile />} />
          <Route path='/patients-module/emergency-ward' element={<EmergencyWardList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
