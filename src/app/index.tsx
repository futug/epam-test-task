import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './providers/router';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
