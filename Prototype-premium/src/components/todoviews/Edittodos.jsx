import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Edittodos() {
  const navigate = useNavigate();
  const [id , SetID] = useState(null)
  const [todo , Settodo] = useState("")

  useEffect(()=> {
    SetID(localStorage.getItem('ID'))
    Settodo(localStorage.getItem('todo'))
  },[]);

  const updateData = async (e) => {
    e.preventDefault();
    console.log({todo})
       await axios.put(`http://127.0.0.1:8000/api/brief/${id}`,{todo})
       console.log("inserted")
       navigate('/indextodos')


  }

  return (
    <div>Edittodos
      <form action="">
        <input key={id} type="text" name='todo' value={todo} onChange={(e) =>Settodo(e.target.value)} />
        <input type="submit" onClick={updateData} />
      </form>
    </div>
  )
}

export default Edittodos