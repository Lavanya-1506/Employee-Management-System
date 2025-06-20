import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage"; // <-- import getLOcalStorage
import { AuthContext } from './context/AuthProvider';
import { useState, useEffect, useContext } from 'react';
import './index.css'; // or './App.css' or your Tailwind CSS file

function App() {

  const [user, setUser] =useState(null)
  const authData= useContext(AuthContext)

  useEffect (()=>{

    if(authData){
      const loggedInUser= localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)

      }
    }

  }, [authData]);
  

  const handleLogin = (email, password) =>{        //function to handlelogin 
    if(email =='admin@me.com' && password == '123'){
       setUser('admin')
       localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
       console.log(user)
    }else if (authData && authData.employees.find((e)=> email ==e.email && e.password ==password)){
      setUser("Employee")
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))

      console.log(user)

    }else
       alert("Invalid Credentials")

  }

  // useEffect(()=>{       
  //   // setLocalStorage()           //call the setLocalstorage 
  //   getLocalStorage()          //call getLocalStorage
  // },)

  
  return(
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}       
      {/* here handleLogin is pass */}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
