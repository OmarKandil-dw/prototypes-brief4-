import { Routes, Route, Link } from 'react-router-dom';
import Todo from './components/Todo'; 
import TodoAdd from './components/TodoCrude/TodoAdd';
import TodoEdit from './components/TodoCrude/TodoEdite';
import TodoIndex from './components/TodoCrude/TodoIndex';

function App() {
  return (
    
    <div className='bg-indigo-500'>
        <div className='bg-indigo bg-slate-200'>
          <div className='bg-indigo max-w-7xl mx-auto min-h-screen'>
            <nav className='m-1 p-1 bg-indigo'>
         
            </nav>
              <Routes>
                <Route path='/' element={<Todo />} />
                <Route path='/LisTodo' element={<TodoIndex />} />
                <Route path='/Add/create' element={<TodoAdd />} />
                <Route path='/Edit/:id' element={<TodoEdit />} />
              </Routes>
          </div>
        </div> 
    </div>

    // <Todo />
  );
}

export default App;
