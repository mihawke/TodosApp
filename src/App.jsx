// src/App.js
import React from 'react';
import './App.css'
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='flex flex-col flex-1 p-4'>
      <h1 className='text-5xl font-bold text-center mb-8'>To-Do List</h1>
      <TodoList />
    </div>
  );
};

export default App;
