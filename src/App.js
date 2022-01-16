import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientform from './components/PatientModule/Patientform';
import PatientProfile from './components/PatientModule/PatientProfile';
import ContactForm from './components/PatientModule/ContactForm';
import Login from './components/auth/login';
import './App.css';
import Navbar from './components/home/Navbar';
import FrontPage from './components/home/FrontPage';
import DoctorsModule from './components/DoctorsModule/DoctorsModule';
import PatientsModule from './components/PatientModule/PatientsModule';
import Covid from './components/PatientModule/Covid19-page/Covid';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<FrontPage/>} />
          <Route path='/doctors-module' element={<DoctorsModule/>} />
          <Route path='/patients-module' element={<PatientsModule/>} />
          <Route path='/patients-module/covid-19' element={<Covid/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/patient-profile' element={<PatientProfile/>} />
          <Route path='/patient-register' element={<Patientform />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
