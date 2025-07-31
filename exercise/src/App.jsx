import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  )
}

export default App
