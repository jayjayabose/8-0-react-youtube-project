import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Home from './components/Home';
import Videos from './components/Videos';
import Scrap from './components/Scrap';

import reportWebVitals from './reportWebVitals';
import { BroswerRouter,
Routes,
Route,
BrowserRouter,
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<App />}>
          <Route path ="" element={<Home />} />
          <Route path ="about" element={<About />} />
          <Route path="videos" element={<Videos />} >
            <Route path=":id" element={Videos} />
          </Route>
        </Route>
        <Route path="test" element={<Home />} />
        <Route path="scrap" element={<Scrap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
