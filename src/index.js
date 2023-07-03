import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/movie-app" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
