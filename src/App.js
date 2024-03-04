import React, { useEffect, useState } from 'react';

function MembersList() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/members/getAllMembers')
            .then(response => response.json())
            .then(data => setMembers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h2>Members</h2>
            <ul>
                {members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MembersList;