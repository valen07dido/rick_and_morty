import styles from './SearchBar.module.css'
import { useState } from 'react';
export default function SearchBar(props) {
 const [id,setid]=useState('')

const handleChange=(event)=>{
  setid(event.target.value)

}

   const {onSearch} =props
   return (
      <div className={styles.divBarra}>
         <input type="search" placeholder="Write ID...🔍" onChange={handleChange} value={id} className={styles.inputBar}/>
         <button onClick={()=>{onSearch(id);
         setid('')
         }} className={styles.boton}>Agregar</button>
      </div>
   );
}
