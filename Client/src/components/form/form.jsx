import { useState } from "react";
import validator from "./validation";
import imgLogin from "./imgForm/logo login.png";
import encabezado from "./imgForm/encabezado.png";
import style from "./form.module.css";
import {useNavigate } from "react-router-dom";
import { access } from "../../redux/actions";
import { useDispatch } from "react-redux";
const Form = (props) => {
  const { login } = props;
  const dispatch=useDispatch()
const navigate=useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const handleChange = (e) => {
    setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleRegister=()=>{
    navigate('/register')
   dispatch(access())
   console.log('prueba')
  }
  return (
    <div>
      <img src={imgLogin} alt="" className={style.logo} />
      <form onSubmit={handleSubmit} className={style.Form}>
        <div className={style.datos}>
          <label htmlFor="email" className={style.labelEmail}>
            Email:
          </label>
          <input
            type="text"
            name="email"
            placeholder="tu email...📧"
            value={userData.email}
            onChange={handleChange}
            className={style.inputEmail}
          />
          {errors.e2 ? (
            <p>{errors.e2}</p>
          ) : errors.e3 ? (
            <p>{errors.e3}</p>
          ) : (
            <p>{errors.e1}</p>
          )}
          <br />
          <label htmlFor="password" className={style.labelPassword}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="constraseña...🙈"
            value={userData.password}
            onChange={handleChange}
            className={style.inputPassword}
          />
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
          <br />
          <button className={style.botonSubmit}>Submit</button>
        </div>
        <div>
          <img src={encabezado} alt="" className={style.encabezado} />
        </div>
      </form>
        <div>
          <button className={style.register} onClick={handleRegister}>
            no tienes usuario? registrate
          </button>
        </div>
    </div>
  );
};

export default Form;
