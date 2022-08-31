import './App.css';
import Login from './AjitComponents/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="App">
        <button className="btn btn-danger my-3">Convert to UpperCase</button>
      </div>
      <Login/>
    </div>
  );
}

export default App;
