// src/components/TodoInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/todoSlice';

const TodoInput = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the page from reloading
        if (title.trim() && text.trim() && author.trim()) {
            dispatch(addTodo({ title, text, author })); // Pass an object with all the data
            setTitle('');
            setText('');
            setAuthor('');
        }
    };

    return (
        <form onSubmit={handleSubmit}
            className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-between"
        >
            <input
                type="text"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Todo Title"
                className="text-gray-800 bg-transparent border-b-2 w-[80%] rounded-md px-2 py-1 outline-none"
            />
            <input
                type="text"
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
                placeholder="Todo Text"
                className="text-gray-800 bg-transparent border-b-2 w-[80%] rounded-md px-2 py-1 outline-none"

            />
            <input
                type="text"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Todo Author"
                className="text-gray-800 bg-transparent border-b-2 w-[80%] rounded-md px-2 py-1 outline-none"

            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoInput;
