
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import { useState ,useContext } from 'react'
import UserContext from './Context/userContext'

function App() {

  

  return (
   
     
   <userContextProvider>

<h1>chai and react</h1>
     <Login/>
     <Profile/>

   </userContextProvider>
  )
}

export default App
