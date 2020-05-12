import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import routes from './routes';

function App() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
