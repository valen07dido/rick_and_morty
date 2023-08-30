import './App.css';
import Cards from './components/cards/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BarraNav from './components/nav/barraNav';
import { Route, Routes } from "react-router-dom";
import About from "./components/about/about.jsx";
import Detail from "./components/detail/detail.jsx";
import PATHROUTES from "./helpers/PathRoutes.helper.js";
import Form from './components/form/form';
import { useLocation,useNavigate } from 'react-router-dom';

const App=()=> {

const navigate=useNavigate()
const [access, setAccess] = useState(false);
const EMAIL='valendido69@gmail.com'
const PASSWORD='44576210'
const [characters, setCharacters]=useState([])

useEffect(() => {
   !access && navigate('/');
}, [access]);

const login=(userData)=>{
   if(userData.password===PASSWORD && userData.email===EMAIL){
      setAccess(true)
      navigate('/home');
   }
}
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
 const {pathname} = useLocation()
   return (
      <div className='App'>
         
         {pathname !== '/' && <BarraNav onSearch={onSearch}/>}
         <Routes>
         <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path={PATHROUTES.ABOUT} element={<About/>}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.FORM} element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;
