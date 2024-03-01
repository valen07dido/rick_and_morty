import React from "react";
import { useSelector } from "react-redux";
import style from "./form.module.css";
const FormRegistrer = () => {
  const { access } = useSelector((state) => state);
  console.log(access);
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <h1>ingrese sus datos:</h1>
        <div className={style.inputGroup}>
          <input type="text" name="name" id="name" required />
          <label htmlFor="name">Nombre completo</label>
        </div>
        <div className={style.inputGroup}>
          <input type="text" name="email" id="email" required />
          <label htmlFor="email">email</label>
        </div>
        <div className={style.inputGroup}>
          <input type="password" name="password" id="password" required />
          <label htmlFor="password">Contraseña</label>
        </div>
        <div className={style.inputGroup}>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <label htmlFor="confirmPassword">Repetir la contraseña</label>
        </div>
        <button>Registarse</button>
      </form>
    </div>
  );
};

export default FormRegistrer;
