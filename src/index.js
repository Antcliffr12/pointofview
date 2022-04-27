import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import './style.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Layout>
    <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
  </Layout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
