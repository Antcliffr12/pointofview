import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import {useState, useEffect} from "react";
import Navigation from './components/Navigation';




const query = `
{
  pageCollection{
    items{
      title
      image{
        url
      }
    }
  }
}
`;


function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window.fetch('https://graphql.contentful.com/content/v1/spaces/6se57df7pirx/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Auth request
        Authorization: "Bearer gJ4BMkrLxjEqBP-CXuMh6zQ5CKMNEGWOjTbH8j9T2P0",
      },
      //GraphQL Query
      body: JSON.stringify({ query })
    })
    .then((repsonse) => repsonse.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.log(errors);
      }

        // rerender the entire component with new data
        setPage(data.pageCollection.items[0]);

    });
  }, [])

  if(!page) {
    return "Loading...";
  }

 

  return (
    <>

    </>
  );
}

export default App;
