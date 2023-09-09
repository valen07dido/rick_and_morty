import React from "react";
import Card from "../card/Card";
import style from "./cards.module.css";


const Characters = (props) => {
  
  const { onClose } = props;
  return (
    <div className={style.contenedor}>

      {props.characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
export default Characters;
