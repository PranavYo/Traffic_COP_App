import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './InspectorComponents/Dashboard';

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
