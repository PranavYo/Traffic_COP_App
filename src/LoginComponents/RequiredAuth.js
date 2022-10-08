import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from './AuthProvider'

function RequiredAuth({children}) {
    const auth = useAuth()
    if (!auth.user)
    {
        return <Navigate to = '/'/>
    }
    return children
}

export default RequiredAuth