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
          <input type="text" name="name" id="" required />
          <label htmlFor="">nombre</label>
        </div>
        <div className={style.inputGroup}>
          <input type="text" name="email" id="" required  />
          <label htmlFor="">email</label>
        </div>
        <div className={style.inputGroup}>
          <input type="text" name="affair" id="" required  />
          <label htmlFor="">Asunto</label>
        </div>
        <div className={style.inputGroup}>
          <textarea
            name="message"
            placeholder="Ingrese su mensaje aqui..."
            id=""
            cols="100%"
            rows="10"
            required
            className={style.message}
          ></textarea>
        </div>
        <button>Registarse</button>
      </form>
    </div>
  );
};

export default FormRegistrer;
