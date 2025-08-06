import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <div id="header">
        <div>로고</div>
        <div>메뉴들</div>
      </div>

      <div id="main">
        <div id="content">
          부모의 한가운데 배치
        </div>
      </div>
      <div id="footer">
      </div>
    </div>
  )
}

export default App
