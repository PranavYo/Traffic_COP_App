import React from 'react'
import { Button, Container } from 'reactstrap'
import MedicalLocation from './MedicalLocation'
import {useAuth} from '../LoginComponents/AuthProvider'


function DashboardMedical() {
  let auth = useAuth()

  return (

    <Container className="align-middle bg-light border">
        <h1 className="text-center">Medical Help Team Dashboard</h1>
        <Button color='danger' onClick={auth.logout}>Logout</Button>
        <MedicalLocation/>
    </Container>
  )
}

export default DashboardMedical