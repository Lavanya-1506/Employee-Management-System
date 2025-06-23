import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	// localStorage.clear()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin} = getLocalStorage()
    setUserData({ employees, admin })
  }, []) // Only run once

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider