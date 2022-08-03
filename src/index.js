import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Search from './components/Search';
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
          <Route path ="" element={<Search />} />
          <Route path ="about" element={<About />} />
        </Route>
        <Route path="test" element={<Search />} />
        <Route path="scrap" element={<Scrap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
