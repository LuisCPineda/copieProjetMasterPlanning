import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import TachePage from './assets/pages/TachePage';
import ConnexionPage from './assets/pages/ConnexionPage';



import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<ConnexionPage/>}/>
          <Route path='/tache' element={<TachePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
