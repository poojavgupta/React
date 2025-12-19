import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Customers/Components/Navigation/Navigation'


function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
    {/* <h1 className="text-3xl font-bold text-red-500">
      Tailwind working 🎉
    </h1> */}
    <Navigation></Navigation>
    </>

  )
}

export default App
