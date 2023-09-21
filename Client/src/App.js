import "./App.css";
import Cards from "./components/cards/Cards.jsx";
// eslint-disable-next-line
import { useState, useEffect } from "react";
import axios from "axios";
import BarraNav from "./components/nav/barraNav";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/about.jsx";
import Detail from "./components/detail/detail.jsx";
import Form from "./components/form/form";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/favorites/favorites";
import Error404 from "./components/error404/error404";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import PATHROUTES from "./helpers/PathRoutes.helper";
import { removeFav } from "./redux/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  // const [access, setAccess] = useState(false);c
const Dispatch=useDispatch()
  const [access, setAccess] = useState(
    localStorage.getItem("isLoggedIn") === true
  );
  const EMAIL = "";
  const PASSWORD = "";
  const [characters, setCharacters] = useState([]);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    }
  };

  const logOut = () => {
    setAccess(false);
    navigate('/')
  };
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
     Dispatch(removeFav(id))
  };

  const onSearch = (id) => {
    if (id > 826 || id === "") {
      window.alert("no hay personajes con ese ID");
    } else {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => {
              if (!oldChars.some((char) => char.id === data.id)) {
                console.log("ese id ya esta");
                return [...oldChars, data];
              } else {
                return oldChars;
              }
            });
          } else if (id > 826) {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  };
  const { pathname } = useLocation();
  const formPage = pathname === PATHROUTES.FORM;
  const ErrorPage = pathname === PATHROUTES.ERROR;
  return (
    <div className="App">
      {/* {pathname !== "/" && <BarraNav onSearch={onSearch} />} */}
      {access === true && !ErrorPage && !formPage && (
        <BarraNav onSearch={onSearch} logOut={logOut}/>
      )}
      <Routes>
        <Route path={PATHROUTES.FORM} element={<Form login={login} />} />
        <Route element={<ProtectedRoute canActivate={access} />}>
          <Route
            path={PATHROUTES.HOME}
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Detail />} />
          <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
