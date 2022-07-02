import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

const tryCatch = (t, e = (err) => console.error(err)) => {
  return function (...args) {
    try {
      return t.apply(this, args);
    } catch (err) {
      e.apply(this, err);
    }
  }
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    tryCatch(async () => {
      const response = await axios.get('/todos');
      setTodos(response.data);
    })();
  }, [todos]);

  const updateTodo = (id) => {
    tryCatch(async () => {
      let todo = todos.filter(t => t._id === id)[0];
      todo.complete = !todo.complete;

      const response = await axios.put(`/todos/${id}`, todo);
    })(id);
  }

  const deleteTodo = (id) => {
    tryCatch(async () => {
      const response = await axios.delete(`/todos/${id}`);
    })(id);
  }

  const handleChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    tryCatch(async () => {
      let todo = {
        description: description,
        complete: false
      }
      const response = await axios.post(`/todos`, todo);
    })(e);
  }

  return (
    <div>
      <div className="header">
        <h2>Todos</h2>
      </div>
      <div className="content">
        <ul>
          {todos && todos.map(todo => (
            <li>
              <h2>{todo.description}</h2>
              <h3>Completed: {todo.complete ? "True" : "False"}</h3>
              <button onClick={() => updateTodo(todo._id)}>Update</button>
              <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </li>)
          )}
        </ul>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="description" value={description} onChange={handleChange} />
            <input type="submit" value="Add Todo" />
          </form>
        </div>
      </div>
    </div >
  )
}

export default App;
