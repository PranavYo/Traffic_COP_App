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
        <Route path="/" element={<Login />} />
        <Route path="/inspector/*" element={<Dashboard />} />
        <Route path="/tct/*" element={<TCTDashboard />} />
        <Route path="/medical/*" element={<DashboardMedical />} />
      </Routes>
    </div>
  );
}

export default Home;
