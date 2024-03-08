import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from '../Context/AuthContext'

const ProtectedRoute = ({children}) => {
const {user}= UserAuth()

    if(!user){ //if user is not true
        return <Navigate to='/' />
    }
    else{
        return  children;
    }
}

export default ProtectedRoute
