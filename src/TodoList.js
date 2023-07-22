import React from 'react';

const TodoList = ({ tasks }) => {

    return (
        <ul>
            {tasks.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
};

export default TodoList;