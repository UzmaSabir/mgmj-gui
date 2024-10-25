// src/pages/TaskPage.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import CreateTaskForm from '../components/CreateTaskForm';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/taskService';

function TaskPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const data = await fetchTasks();
            setTasks(data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            const createdTask = await createTask(newTask);
            setTasks([...tasks, createdTask]);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleUpdateTask = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            setTasks(tasks.map(task =>
                task.id === id ? { ...task, ...updatedTask } : task
            ));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <CreateTaskForm addTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                updateTask={handleUpdateTask}
                deleteTask={handleDeleteTask}
            />
        </div>
    );
}

export default TaskPage;


/*import React from 'react';

function TaskPage() {
    return (
        <div>
            <h1>Task Page</h1>
            <p>This is the Task Page. More functionality will be added here soon!</p>
        </div>
    );
}

export default TaskPage;*/