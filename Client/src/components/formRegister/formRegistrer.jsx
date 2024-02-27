import React from 'react'
import { useSelector } from 'react-redux'
const FormRegistrer = () => {
  const {access}=useSelector((state)=>state)
  console.log(access)
  return (
    <div>
      hola
    </div>
  )
}

export default FormRegistrer
