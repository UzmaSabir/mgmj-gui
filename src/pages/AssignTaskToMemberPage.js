import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/taskService';
import { fetchMembers } from '../services/memberService';
import AssignTaskToMemberList from '../components/AssignTaskToMemberList';
import './AssignTaskToMemberPage.css'; // Import CSS file for styling

function AssignTaskToMemberPage() {
    const [tasks, setTasks] = useState([]);
    const [members, setMembers] = useState([]);
    const [assignedMembers, setAssignedMembers] = useState({}); // Track which member is assigned to which task

    useEffect(() => {
        loadTasks();
        loadMembers();
    }, []);

    const loadTasks = async () => {
        try {
            const data = await fetchTasks();
            setTasks(data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const loadMembers = async () => {
        try {
            const data = await fetchMembers();
            setMembers(data);
        } catch (error) {
            console.error('Error loading members:', error);
        }
    };

    const handleAssignMember = (taskId, memberId) => {
        setAssignedMembers(prevState => ({
            ...prevState,
            [taskId]: memberId
        }));
    };

    return (
        <div className="assign-task-container">
            <h1>Assign Task To Member</h1>
            <p>Select a member to assign each task.</p>

            <AssignTaskToMemberList
                tasks={tasks}
                members={members}
                assignedMembers={assignedMembers}
                handleAssignMember={handleAssignMember}
            />
        </div>
    );
}

export default AssignTaskToMemberPage;