import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const min = 1;
  const max = 826;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const [id, setid] = useState("");

  const handleChange = (event) => {
    setid(event.target.value);
  };

  const { onSearch } = props;
  return (
    <div className={styles.divBarra}>
      <input
        type="search"
        placeholder="Write ID...🔍"
        onChange={handleChange}
        value={id}
        className={styles.inputBar}
      />
      <button
        onClick={() => {
          onSearch(id);
          setid("");
        }}
        className={styles.boton}
      >
        Agregar
      </button>
      <button onClick={() => {
          onSearch(randomNumber)
        }}
        className={styles.boton}
        >Agregar random</button>
    </div>
  );
};

export default SearchBar;
