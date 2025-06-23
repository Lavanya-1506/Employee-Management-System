


import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext); // ✅ Proper destructuring

  // Restore session from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.role);

      if (parsed.role === 'employee' && parsed.data) {
        setLoggedInUserData(parsed.data);
      }
    }
  }, []);

  // Login handler
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData && Array.isArray(authData.employees)) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
