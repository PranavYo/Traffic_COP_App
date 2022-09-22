import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './InspectorComponents/Dashboard.js';
import Login from './LoginComponents/Login.js'
import TCTDashboard from './TrafficCentralTeamComponents/TCTDashboard'

function App() {

  return (
    <div>
        <TCTDashboard/>
    </div>
  );
}

export default App;
