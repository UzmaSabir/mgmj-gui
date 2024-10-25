// components/TaskList.js

import React, { useState } from 'react';
import './TaskList.css'; // Import CSS file for styling

function TaskList({ tasks, updateTask, deleteTask }) {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedName, setEditedName] = useState('');

    const handleEditClick = (id, name) => {
        setEditingTaskId(id);
        setEditedName(name);
    };

    const handleSaveEdit = async (id) => {
        if (!editedName.trim()) return;
        try {
            await updateTask(id, { name: editedName });
            setEditingTaskId(null);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className="task-list-container">
            <h2>Tasks List</h2>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        {editingTaskId === task.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                />
                                <button className="save-btn" onClick={() => handleSaveEdit(task.id)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <span className="task-name">{task.name}</span>
                                <button className="edit-btn" onClick={() => handleEditClick(task.id, task.name)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
