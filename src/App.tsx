import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const mynumber:number[] = [1,2,3,4]
  return (
    <>
      <div>
        {mynumber.map((item , index)=>(
          <>
          <li key={index}>{item}</li>
          </>
        ))}
      </div>
    </>
  )
}

export default App
