import React, { useState } from 'react';
import style from './card.module.css';

export default function Card(props) {
  const { onClose, name, status, species, gender, origin, image } = props;

  // Estado local para controlar la visualización de los detalles
  const [showDetails, setShowDetails] = useState(false);

  // Función para cambiar el estado de los detalles
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={style.contenedor}>
      <button onClick={onClose} className={style.ex}>
        X
      </button>
      <div className={style.carta}>
        <h2 className={style.datos}>Nombre: {name}</h2>
        <h2 className={style.datos}>Estado: {status}</h2>
        <h2 className={style.datos}>Especie: {species}</h2>
        {/* Mostrar detalles solo si showDetails es verdadero */}
        {showDetails && (
          <>
            <h2 className={style.datos}>Género: {gender}</h2>
            <h2 className={style.datos}>Origen: {origin}</h2>
          </>
        )}
        {/* Botón "Ver Más" para mostrar u ocultar detalles */}
        <button onClick={toggleDetails} className={style.verMas}>
          detalles
        </button>
        <img src={image} alt={name} className={style.image} />
      </div>
    </div>
  );
}
