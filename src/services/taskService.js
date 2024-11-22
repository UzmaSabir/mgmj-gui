// src/services/taskService.js

//const API_PREFIX = '/tasks';

// Fetch all tasks
export const fetchTasks = async () => {
    try {
        const response = await fetch('/tasks/getTasks');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

// Create a new task
export const createTask = async (newTask) => {
    try {
        const response = await fetch('/tasks/createTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

// Update a task by ID
export const updateTask = async (id, updatedTask) => {
    try {
        await fetch(`/tasks/updateTask/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        });
        return updatedTask;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

// Delete a task by ID
export const deleteTask = async (id) => {
    try {
        await fetch(`/tasks/deleteTask/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
