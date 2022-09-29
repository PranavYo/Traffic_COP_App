import React from 'react'
import { Container } from 'reactstrap'
import MedicalLocation from './MedicalLocation'

function DashboardMedical() {
  return (

    <Container className="align-middle bg-light border">
        <h1 className="text-center">Medical Help Team Dashboard</h1>
        <br/>
        <MedicalLocation/>
    </Container>
  )
}

export default DashboardMedical