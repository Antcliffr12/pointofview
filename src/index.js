import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import reportWebVitals from './reportWebVitals';
import './style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const { REACT_APP_SPACE_ID: SPACE_ID, REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env;

// const contentfil_url = new ApolloClient({
//   uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
//   credentials: 'same-origin',
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization: `Bearer ${ACCESS_TOKEN}`
//   }
// });

// console.log(contentfil_url);


root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
