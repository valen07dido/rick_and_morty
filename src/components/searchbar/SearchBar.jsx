import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} =props
   return (
      <div className={styles.divBarra}>
         <input type='search' className={styles.inputBar } placeholder='id'/>
         <button onClick={props.onSearch} className={styles.boton}>Agregar</button>
      </div>
   );
}
