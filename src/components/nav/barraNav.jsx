import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from './barraNav.module.css'

const BarraNav = (props) => {
    const {onSearch} =  props;
  return (
    <div className={style.header}>
        <SearchBar onSearch={onSearch} />
    </div>
  )
}
export default BarraNav;