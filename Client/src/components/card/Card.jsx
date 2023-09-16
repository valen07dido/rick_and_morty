import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
// import Characters from '../cards/Cards';
import { connect } from "react-redux";

const Card = ({ character, myFavorites, addFav, removeFav, ...props }) => {
  const { id, name, image, onClose } = props;
  const [isFav, setIsFav] = useState(false);

  // descomentar para hacer un boton que muestre mas detalles
  // const [showDetails, setShowDetails] = useState(false);
  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const { pathname } = useLocation();

  return (
    <div className={style.contenedor}>
      <div className={style.containerBotones}>
        {isFav ? (
          <button className={style.fav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.fav} onClick={handleFavorite}>
            🤍
          </button>
        )}

        {pathname !== "/favorites" && (
          <button onClick={() => onClose(id)} className={style.ex}>
            X
          </button>
        )}
      </div>

      <div className={style.carta}>
        <Link to={`/detail/${id}`}>
          <h2 className={style.datos}>Nombre: {name}</h2>
        </Link>
        {/*descomentar para hacer un boton que muestre mas detalles
         <h2 className={style.datos}>Estado: {status}</h2>
        <h2 className={style.datos}>Especie: {species}</h2>
     
        {showDetails && (
          <>
            <h2 className={style.datos}>Género: {gender}</h2>
            <h2 className={style.datos}>Origen: {origin}</h2>
          </>
        )}
      
        <button onClick={toggleDetails} className={style.verMas}>
          detalles
        </button> */}
        <img src={image} alt={name} className={style.image} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFav: (Character) => dispatch(addFav(Character)),
  removeFav: (id) => dispatch(removeFav(id)),
});

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
