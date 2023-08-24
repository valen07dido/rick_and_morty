import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import BarraNav from './components/nav/barraNav';



function App() {


const [characters, setCharacters]=useState([])

const onClose = (id) => {
   setCharacters(
     characters.filter((char) => {
       return char.id !== Number(id)
     })
   )
  }   

const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   return (
      <div className='App'>
        <BarraNav onSearch={onSearch}/>

        <Cards characters={characters} onClose={onClose} />
    
      </div>
   );
}

export default App;
