// components/MemberList.js

import React, { useState } from 'react';
import './MemberList.css'; // Import CSS file for styling

function MemberList({ members, updateMember, deleteMember }) {
    const [editingMemberId, setEditingMemberId] = useState(null);
    const [editedName, setEditedName] = useState('');

    const handleEditClick = (id, name) => {
        setEditingMemberId(id);
        setEditedName(name);
    };

    const handleSaveEdit = async (id) => {
        if (!editedName.trim()) return;
        try {
            await updateMember(id, { name: editedName });
            setEditingMemberId(null);
        } catch (error) {
            console.error('Error updating member:', error);
        }
    };

    return (
        <div className="member-list-container">
            <h2>Members List</h2>
            <ul className="member-list">
                {members.map(member => (
                    <li key={member.id} className="member-item">
                        {editingMemberId === member.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                />
                                <button className="save-btn" onClick={() => handleSaveEdit(member.id)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <span className="member-name">{member.name}</span>
                                <button className="edit-btn" onClick={() => handleEditClick(member.id, member.name)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => deleteMember(member.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MemberList;
