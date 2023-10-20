import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from './detail.module.css'

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.contain}>
      <div className={style.ConText}>
      <h2>Name: {character?.name}</h2>
      <h2>Status: {character?.status}</h2>
      <h2>Specie:{character?.species}</h2>
      <h2>Gender:{character?.gender}</h2>
      <h2>Origin: {character?.origin}</h2>
      </div>
        <img src={character?.image} alt="" className={style.imagen}/>
    </div>
  );
};

export default Detail;
