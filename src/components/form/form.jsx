import { useState } from "react"
import validator from "./validation"


const Form = (props) => {
  const {login}=props

  const [userData, setUserData]=useState({
    email:'',
    password:''
  })
  const [errors, setErrors] = useState({})

  const handleSubmit=(event)=>{
    event.preventDefault()
    login(userData)
  }

  const handleChange = (e) => {
    setErrors(validator({...userData, [e.target.name]: e.target.value}))
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" placeholder="tu email...📧" value={userData.email} onChange={handleChange}/>
      { errors.e2 ? (
        <p>{errors.e2}</p>
      ):errors.e3 ? (
        <p>{errors.e3}</p>
      ):(
        <p>{errors.e1}</p>
      )}
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="constraseña...🙈" value={userData.password} onChange={handleChange}/>
      {errors.p1 ? (
        <p>{errors.p1}</p>
      ):(
        <p>{errors.p2}</p>
      )}
      <br />
      <button>Submit</button>
    </form>
  )
}

export default Form