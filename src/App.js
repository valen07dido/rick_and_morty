import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import BarraNav from './components/nav/barraNav';
import { Route, Routes } from "react-router-dom";
import About from "./components/about/about.jsx";
import Detail from "./components/detail/detail.jsx";
import PATHROUTES from "./helpers/PathRoutes.helper.js";

const App=()=> {


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
         <Routes>
         <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path={PATHROUTES.ABOUT} element={<About/>}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;
