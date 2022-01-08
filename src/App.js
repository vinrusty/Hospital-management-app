import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientform from './components/PatientModule/Patientform';
import PatientProfile from './components/PatientModule/PatientProfile';
import ContactForm from './components/PatientModule/ContactForm';
import Login from './components/auth/login';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
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
