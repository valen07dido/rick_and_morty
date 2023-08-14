// Importamos React
import React from 'react';

// Creamos el componente Card como una función que recibe las props
export default function Card(props) {
  // Retornamos un elemento div que contiene los datos del personaje
  return (
    <div>
      {/* Usamos un botón con un evento onClick para llamar a la función onClose que viene como props */}
      <button onClick={props.onClose}>X</button>
      {/* Usamos elementos h2 para mostrar el nombre, el estado, la especie, el género y el origen del personaje */}
      <h2>Nombre: {props.name}</h2>
      <h2>Estado: {props.status}</h2>
      <h2>Especie: {props.species}</h2>
      <h2>Género: {props.gender}</h2>
      <h2>Origen: {props.origin.name}</h2>
      {/* Usamos un elemento img con el atributo src para mostrar la imagen del personaje */}
      <img src={props.image} alt={props.name} />
    </div>
  );
}
