import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Routes } from './routes';
import Layout from './Layout';

function App() {
  const MapRoutes = () => {
    return useRoutes(Routes);
  };

  return (
    <Router>
      <div className="App">
        <Layout>
          <MapRoutes />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
