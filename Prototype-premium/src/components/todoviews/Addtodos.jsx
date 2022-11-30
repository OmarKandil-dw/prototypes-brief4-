import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Addtodos = () => {
  const navigate = useNavigate();
  
  const [formvalue,setformvalue] = useState({ 
    todo:""

   })
   const captureValue = (evt) =>{
    console.log(evt.target)
    const name = evt.target.name;
    const value = evt.target.value;
    setformvalue({...formvalue,[name]:value})
   }

   const AddTodos = async (e)=>{
    console.log('passed ')
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/brief/',formvalue)
    setformvalue ({
      todo :""
    })
    console.log('ok')
    navigate('/indextodos')

   }
  return (
    <div>Addtodos

      <form>
        <input type="text" name='todo' value={formvalue.todo} onChange={captureValue} />
        <input type="button" onClick={AddTodos}  />
      </form>
    </div>
  )
}

export default Addtodos