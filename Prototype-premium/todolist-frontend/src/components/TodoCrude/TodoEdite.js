import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// class TodoEdit extends Component {

//   state = {
//     name:''
//   }

// handInput = (e) => {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// }

//   async componentDidMount() {
//     const todo_id = this.props.match.params.id;
//     console.log(todo_id);
//   }

//   editTodo = async (e) => {
//     e.preventDefault();

//   }

const TodoEdit = (props) => {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    console.log(localStorage.getItem('name'));

  }, [])

  const handInput = (e) => {
    setName(e.target.value)
  }

  const updatTodo =(e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/home/${id}`, {name})
    navigate('/LisTodo')
  }


//   useEffect(() => {
//     const todo_id = props.match.params.id;
//     axios.get(`http://127.0.0.1:8000/api/home/${todo_id}`);
//   }, [props.match.params.id]);

  // const handInput = (e) => {
  //   e.preventDefault();
  //   // [e.target.name]: e.target.value
  //   setName({ ...name, [e.target.name]: e.target.value });
  // };

  // const get_Todo = async () => {
  //   await axios.get(`http://127.0.0.1:8000/api/home/${id}`)
  //     const { name } = data.todo;
  //     setName(name);
  //   }

  return (
    <div className="mt-20">
      <form onSubmit={updatTodo} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
        <div className="space-y-6">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Edit Todo</label>
            <input
              name="name"
              value={name}
              onChange={handInput}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
          >
            Update todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoEdit;
