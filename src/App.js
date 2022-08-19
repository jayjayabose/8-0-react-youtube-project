import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <div id = "navBar">
        Youtube | <Link to="/">Home</Link> | <Link to="/About">About</Link>
      </div>    
      <Outlet />
    </div>
    
  );
}

export default App;
