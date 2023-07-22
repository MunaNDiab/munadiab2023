import React from 'react';

const TodoCount = ({ tasks }) => {
    return <div>
        Total Tasks: {tasks.length}
    </div>;
};

export default TodoCount;