import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Sample from './Components/Sample';
import Grid from './Components/Grid';
import Piechart from './Components/Piechart';
import Vertical from './Components/Vertical';

function App() {
  return (
    <div className="App">


      <Sample />
      {/* <Sidebar />
      <Grid /> */}
      <Vertical />

      {/* <Piechart /> */}


    </div>
  );
}

export default App;
