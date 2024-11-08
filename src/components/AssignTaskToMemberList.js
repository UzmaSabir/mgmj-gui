// src/components/AssignTaskToMemberList.js
import React from 'react';
import './AssignTaskToMemberList.css'; // Import CSS file for styling

function AssignTaskToMemberList({ tasks, members, assignedMembers, handleAssignMember }) {
    return (
        <table className="assign-task-table">
            <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Choose a member to assign the task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td className="task-name">{task.name}</td>
                        <td className="member-selection">
                            {members.map(member => (
                                <label key={member.id} className="radio-label">
                                    <input
                                        type="radio"
                                        name={`task-${task.id}`}
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
    );
}

export default AssignTaskToMemberList;