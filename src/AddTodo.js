import React, { useState } from 'react';

const AddTodo = ({ Todo }) => {
    const [newtask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Todo(newtask);
        setNewTask('');
    };
    const handlehange = (event) => {
        setNewTask(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                New task:
                <input type="text" value={newtask} onChange={handlehange} />
            </label>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;