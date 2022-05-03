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
import SliderCTA from './components/ServicesCTA';

function App() {
  return (
  <BrowserRouter>
    <Layout>
     <Home />
     <SliderCTA />
    </Layout>
  </BrowserRouter>
  )
}

export default App;