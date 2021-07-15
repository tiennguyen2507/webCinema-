import React from 'react';
import './App.css';
import Narbar from './consponents/JSX/Narbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './consponents/JSX/Slide';
import Select from './consponents/JSX/Select';
import ListCinema from './consponents/JSX/ListCinema';



function App() {
  
  return (
    <div>
      <Narbar />
      <Slide />
      <Select />
      <ListCinema />
      
    </div>
    
   
  );
}
export default App;
