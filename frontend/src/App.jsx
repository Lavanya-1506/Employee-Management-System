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
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  
  useEffect(()=>{
    const loggedInUser= localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setloggedInUserData(userData.data)
      console.log("User logged in")

    }

  }, [])

  if (!authData) return null; // Wait for context



  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      )
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App