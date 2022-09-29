import React from "react";
import Dashboard from "../InspectorComponents/Dashboard";
import TCTDashboard from "../TCTComponents/TCTDashboard";
import DashboardMedical from "../MedicalComponents/DashboardMedical";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from "./Login";

function Home() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/inspector/*" element={<Dashboard />} />
        <Route exact path="/tct/*" element={<TCTDashboard />} />
        <Route exact path="/medical/*" element={<DashboardMedical />} />
      </Routes>
    </div>
  );
}

export default Home;
