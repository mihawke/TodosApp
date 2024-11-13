// src/components/TodoList.js
import React from 'react';
// We can read data from the store with useSelector, and dispatch actions using useDispatch.
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../app/todoSlice';
import TodoInput from './TodoInput';

const TodoCard = ({ title, text, status, author, time, onClick }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-xl font-semibold text-gray-800">{title}</p>
      <p className="text-gray-600">{text}</p>
      <p className={`text-sm ${status ? 'text-green-600' : 'text-red-600'}`}>
        {status ? 'Completed' : 'Incomplete'}
      </p>
      <p className="text-sm text-gray-500">{author}</p>
      <p className="text-xs text-gray-400">{time}</p>
      <button
        onClick={onClick}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
      >
        Remove
      </button>
    </div>

  )
}

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <div className='grid grid-cols-4 gap-4'>
      <TodoInput />

      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          text={todo.text}
          author={todo.author}
          status={todo.completed}
          time={todo.createdAt}
          onClick={() => dispatch(removeTodo(todo.id))}
        />
      ))}
    </div>
  );
};

export default TodoList;
