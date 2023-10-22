import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const min = 1;
  const max = 826;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const [id, setid] = useState("");
  const [showLogoutText, setShowLogoutText] = useState(false); 

  const handleChange = (event) => {
    setid(event.target.value);
  };

  const { onSearch, logOut } = props;
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
      <button
        onClick={() => {
          onSearch(randomNumber);
        }}
        className={styles.boton}
      >
        Agregar random
      </button>

      <button 
        onClick={logOut} 
        onMouseEnter={() => setShowLogoutText(true)} // Muestra el texto cuando el mouse entra
        onMouseLeave={() => setShowLogoutText(false)} // Oculta el texto cuando el mouse sale
        className={styles.botonLogOut}
      >
        🫂 {showLogoutText&& <p className={styles.cerrarSesion}>cerrar sesion</p>} 
      </button>
      
    </div>
  );
};

export default SearchBar;
