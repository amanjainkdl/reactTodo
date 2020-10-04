import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import uuid from 'uuid/v4';

function App() {

  // let dummyTodos = [{ id: uuid(), task: "Running", date: "2020-06-27" }, { id: uuid(), task: "Buy potato", date: "2020-06-28" }, { id: uuid(), task: "Order cake for raman", date: "2020-06-29" }];
  let initialTodos = localStorage.getItem('todos') != null ? JSON.parse(localStorage.getItem('todos')) : [];
  let [todos, setTodos] = useState(initialTodos);
  let [todoText, setTodoText] = useState('');
  let [todoDate, setTodoDate] = useState('');
  let [isEditing, setIsEditing] = useState(false);
  let [id, setId] = useState('0');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleTodo = (e) => {
    setTodoText(e.target.value);
  }

  const handleDate = (e) => {
    setTodoDate(e.target.value);
  }

  const handleClearAll = () => {
    todos = setTodos([]);
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (todoText.length > 0 && todoDate.length > 0) {
      if (isEditing) {
        let tempTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.task = todoText;
            todo.date = todoDate;
          }
          return todo;
        });
        setTodos(tempTodos);
        setIsEditing(false);
      } else {
        setTodos([...todos, {
          id: uuid(),
          task: todoText,
          date: todoDate
        }]);
      }
      setTodoText('');
      setTodoDate('');
      document.getElementById('todo-input').value = '';
      document.getElementById('date').value = '';
    }
    else {
      console.log("Pls enter correct details");
    }
  }

  const handleDelete = (id) => {
    let tempTodo = todos.filter(todo => todo.id !== id);
    setTodos(tempTodo);
  }

  const handleEdit = (id) => {
    let editableTodo = todos.find(todo => {
      return todo.id === id ? todo : null;
    });
    setTodoText(editableTodo.task);
    setTodoDate(editableTodo.date);
    document.getElementById('todo-input').value = editableTodo.task;
    document.getElementById('date').value = editableTodo.date;
    setIsEditing(true);
    setId(id);
  }

  return (
    <div className="app">
      <h1 className="heading">Todo input</h1>
      <Form handleTodo={handleTodo} handleDate={handleDate} submitForm={submitForm} isEditing={isEditing} />
      <h1 className="heading">Todo list</h1>
      <List todos={todos} handleClearAll={handleClearAll} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
