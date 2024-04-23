import logo from './logo.svg';
import './App.css';
import UserDevi from './PassFuncAsProp';
import Membsres from './Members';
function App() {

  function getData() {
    alert(' helo devilallll')
  }
  return (
    <div className="App">
      <h2>Devilal Panchal</h2>
      <UserDevi data={getData} />
      <div>
        <Membsres data={getData} />
      </div>
    </div>
  );
}

export default App;
