/*import React from 'react';

function AssignTaskToMemberPage() {
    return (
        <div>
            <h1>Assign Task To Memeber Page</h1>
            <p>This is the task assigning to member page. More functionality will be added here soon!</p>
        </div>
    );
}

export default AssignTaskToMemberPage;*/

// src/pages/AssignTaskToMemberPage.js
import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/taskService';
import { fetchMembers } from '../services/memberService';

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
        <div>
            <h1>Assign Task To Member</h1>
            <p>Select a member to assign each task.</p>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '2px solid #000', padding: '10px', textAlign: 'left' }}>Tasks</th>
                        <th style={{ borderBottom: '2px solid #000', padding: '10px', textAlign: 'left' }}>Choose a member to assign the task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px' }}>{task.name}</td>
                            <td style={{ padding: '10px' }}>
                                {members.map(member => (
                                    <label key={member.id} style={{ marginRight: '10px' }}>
                                        <input
                                            type="radio"
                                            name={`task-${task.id}`}  // Group radio buttons by task ID
                                            value={member.id}
                                            checked={assignedMembers[task.id] === member.id}
                                            onChange={() => handleAssignMember(task.id, member.id)}
                                        />
                                        {member.name}
                                    </label>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AssignTaskToMemberPage;
