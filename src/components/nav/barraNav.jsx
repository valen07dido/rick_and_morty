  import React from "react";
  import SearchBar from "../searchbar/SearchBar";
  import style from './barraNav.module.css'
  import { Link} from "react-router-dom";

  const BarraNav = (props) => {
      const {onSearch} =  props;
    return (
      <div className={style.header}>
          <SearchBar onSearch={onSearch} />
          <div>
            <Link to={'/about'}>
          <button className={style.boton}>About</button>
          </Link> 
          <Link to={'/home'}>
          <button className={style.boton}>Home</button>
          </Link>
          </div>
          
      </div>
    )
  }
  export default BarraNav;