import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './detail.module.css'

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  console.log(character)
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      console.log(data)
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div className={styles.contain}>
      <div className={styles.ConText}>
      <h2>Name: {character?.name}</h2>
      <h2>Status: {character?.status}</h2>
      <h2>Specie:{character?.species}</h2>
      <h2>Gender:{character?.gender}</h2>
      <h2>Origin: {character.origin?.name}</h2>
      </div>
        <img src={character?.image} alt="" className={styles.imagen}/>
    </div>
  );
};

export default Detail;
