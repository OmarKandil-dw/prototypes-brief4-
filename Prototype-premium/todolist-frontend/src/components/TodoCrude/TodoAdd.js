import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const TodoAdd = () => {
  const [formValue, setFormValue] = useState({
    name:"",
  })

const saveValue = (e) => {
  const {name, value} = e.target;
  // const name = e.target.name;
  // const value = e.target.value;
  setFormValue({...formValue, [name]: value});
};
const navigate = useNavigate();

const addTodo = async (e) => {
  e.preventDefault();
  await axios.post("http://127.0.0.1:8000/api/home", formValue);
  setFormValue({
    name:""
  }); 
  navigate("/LisTodo")
};
  return (
  <div className='mt-20'>
  <form onSubmit={addTodo} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
    <div className='space-y-6'>
      <div className='mb-4'>
          <label className='block mb-2 text-sm font-medium'>Todo</label>
          <input name='name' value={formValue["name"]} onChange={saveValue}  className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2'/>
      </div>
    </div>
    <div className='my-3'>
      <button type='submit' className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Add todo</button>
    </div>
  </form>
  </div>
  )
}

export default TodoAdd
