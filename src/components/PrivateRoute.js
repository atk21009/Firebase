import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.js'

export default function PrivateRoute({element: Element, ...rest}) {
    const { currentUser } = useAuth()
  return currentUser ? <Outlet {...rest} /> : <Navigate to="/login" />
  

}
