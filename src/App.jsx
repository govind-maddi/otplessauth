import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Otp from './Otp'

function App() {

  const [ login,setLogin ] = useState(null);
  const [ auth,setAuth ] = useState(false);

  const handleLogin = (details) => {
    setLogin(details);
  }

  return (
    <>
      {
        login ? 
        <div id='details'>
          { 
              <>
                <label><span>Token:</span> {login.token}</label>
                <label><span>Timestamp:</span> {login.timestamp}</label>
                <label><span>Timezone:</span> {login.timezone}</label>
                <label><span>Name:</span> {login.mobile.name}</label>
                <label><span>MobileNo:</span> {login.mobile.number}</label>
                <label><span>Name:</span> {login.email.name}</label>
                <label><span>Email:</span> {login.email.email}</label>
              </>
          }
        </div>  :
        <>
        <button onClick={() => setAuth(true)}>Authenticate</button>
        { auth && <Otp handleLogin={handleLogin}/> }
        </> 
      
      }
    </>
  )
}

export default App;
