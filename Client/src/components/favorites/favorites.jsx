import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import styles from "./favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={styles.contenedorSelect}>
        <select
          name=""
          id=""
          onChange={handleOrder}
          className={styles.selectores}
        >
          <option value="A" className={styles.opciones}>Ascendente</option>
          <option value="D" className={styles.opciones}>Descendente</option>
        </select>

        <select
          name=""
          id=""
          onChange={handleFilter}
          className={styles.selectores}
        >
          <option value="Male" className={styles.opciones}>Male</option>
          <option value="Female" className={styles.opciones}>Female</option>
          <option value="Genderless" className={styles.opciones}>Genderless</option>
          <option value="unknown" className={styles.opciones}>unknown</option>
        </select>

      </div>
      <div className={styles.container}>
        {myFavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
