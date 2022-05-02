import React from 'react';
import Layout from './components/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import './style.scss';

function App() {
  return (
  <BrowserRouter>
    <Layout>
      <Home />
      <About />
   
    </Layout>
  </BrowserRouter>
  )
}

export default App;