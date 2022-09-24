import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './InspectorComponents/Dashboard.js';
import Login from './LoginComponents/Login.js'
import TCTDashboard from './TCTComponents/TCTDashboard'
import Home from './LoginComponents/Home';
import DashboardMedical from './MedicalComponents/DashboardMedical';

function App() {

  return (
    <div>
        <Home/>
    </div>
  );
}

export default App;
