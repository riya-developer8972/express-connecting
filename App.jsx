import { useState } from 'react'
import './App.css'
import { useForm} from "react-hook-form"

  

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useform()
  const onSubmit = (data) => console.log(data)
  return (
    <>
       <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='username' {...register("username",{ required: true, minlength:3, maclength:8 })} type="text" />
      {errors.username && errors.username.message}
      <br />
      <input {...register("password")} type="password"/>
      <input type="submit" value= "submit"/>
      
        </form>
       </div>

    </>
  )
}

export default App
