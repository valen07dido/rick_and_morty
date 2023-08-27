import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from './barraNav.module.css'
import { Link} from "react-router-dom";

const BarraNav = (props) => {
    const {onSearch} =  props;
  return (
    <div className={style.header}>
        <SearchBar onSearch={onSearch} />
        <Link to={'/about'}>
        <button>About</button>
        </Link> 
        <Link to={'/home'}>
        <button>Home</button>
        </Link>
        
    </div>
  )
}
export default BarraNav;