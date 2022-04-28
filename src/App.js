import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import useContentful from './helpers';


const query = `
{
   heroSectionCollection{
       items{
           media{
               url
           }
           heroTitle
           subText
           slug
       }
   }
}
`;


function App() {
 
  let {data, errors } = useContentful(query)

  if(errors) 
    return (
      <span style={{ color: "red" }}>
        {errors.map(error => error.message).join(',') }
      </span>
    );
  if(!data) return <span>Loading...</span>

  return (
    <div className="App">
    <header className="App-header">
      <h1>hi</h1>
      {data.heroSectionCollection.items[0].heroTitle}
    </header>
  </div>
  );
}

export default App;
