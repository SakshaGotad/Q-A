import React from 'react'
import { useAuth } from './Context/auth'
import {Navigate, Outlet} from 'react-router-dom'
const ProtectedRoute = () => {
    const{isLoggedin}=useAuth();
  return isLoggedin ? <Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoute
