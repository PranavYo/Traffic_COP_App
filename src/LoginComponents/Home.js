import React from "react";
import Dashboard from "../InspectorComponents/Dashboard";
import TCTDashboard from "../TCTComponents/TCTDashboard";
import DashboardMedical from "../MedicalComponents/DashboardMedical";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from "./Login";
import {AuthProvider} from "./AuthProvider";
import RequiredAuth from "./RequiredAuth";

function Home() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/inspector/*" element={<RequiredAuth><Dashboard /> </RequiredAuth>} />
        <Route exact path="/tct/*" element={<RequiredAuth><TCTDashboard /></RequiredAuth>} />
        <Route exact path="/medical/*" element={<RequiredAuth><DashboardMedical /> </RequiredAuth>} />
      </Routes>
    </AuthProvider>
  );
}

export default Home;
