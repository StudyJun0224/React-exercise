import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import SelectPlacePage from './pages/SelectPlacePage'
import WriteDiaryPage from './pages/WriteDiaryPage'
import PreviewPage from './pages/PreviewPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<SelectPlacePage/>}/>
        <Route path="/write" element={<WriteDiaryPage/>}/>
        <Route path = "/preview" element={<PreviewPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
