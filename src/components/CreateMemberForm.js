// components/CreateMemberForm.js

import React, { useState } from 'react';

function CreateMemberForm({ addMember }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        addMember({ name });
        setName('');
    };

    return (
        <div>
            <h2>Create Member</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter member name"
                />
                <button type="submit">Add Member</button>
            </form>
        </div>
    );
}

export default CreateMemberForm;
