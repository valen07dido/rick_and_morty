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
import React from 'react';
import Card from './Card';

// Creamos el componente Characters como una función que recibe las props
export default function Characters(props) {
  // Retornamos un elemento div que contiene las Cards
  return (
    <div>
      {/* Usamos el método map para devolver un componente Card por cada personaje */}
      {props.characters.map((character) => (
        // Pasamos el objeto character como props al componente Card y le asignamos una key con el id del personaje
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
}