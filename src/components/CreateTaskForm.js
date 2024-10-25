// components/CreateTaskForm.js

import React, { useState } from 'react';

function CreateTaskForm({ addTask }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        addTask({ name });
        setName('');
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter task name"
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default CreateTaskForm;
