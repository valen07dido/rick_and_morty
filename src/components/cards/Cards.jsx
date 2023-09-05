// import Card from './Card';

// export default function Cards(props) {
//    return( <div>
//       {props.Cards.map((personaje) => (
//          <Card key={personaje.id}{...personaje}/>
//       ))}
//    </div>;
//    )
// }
// Importamos React y el componente Card
import React from "react";
import Card from "../card/Card";
import style from "./cards.module.css";
// Creamos el componente Characters como una función que recibe las props
const Characters = (props) => {
  // Retornamos un elemento div que contiene las Cards
  const { onClose } = props;
  return (
    <div className={style.contenedor}>
      {/* Usamos el método map para devolver un componente Card por cada personaje */}
      {props.characters.map((character) => (
        // Pasamos el objeto character como props al componente Card y le asignamos una key con el id del personaje
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
