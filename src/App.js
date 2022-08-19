import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header"
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>  

      </header>
      <Outlet />
    </div>
    */
    <div id="app">
      <div id = "navBar">
        Youtube | <Link to="/">Home</Link> | <Link to="/About">About</Link>
      </div>    
      <Outlet />
    </div>
    
  );
}

export default App;
