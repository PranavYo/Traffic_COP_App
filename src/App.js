import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './MedicalComponents/Dashboard';

import DynamicTable from './TableCreation/DynamicTable';

function App() {

  return (
    <div>
       {/*  <Dashboard/> */}
        <DynamicTable/>
    </div>
  );
}

export default App;
