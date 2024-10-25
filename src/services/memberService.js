// src/services/memberService.js

// Fetch all members
export const fetchMembers = async () => {
    try {
        const response = await fetch('/getMembers');
        return await response.json();
    } catch (error) {
        console.error('Error fetching members:', error);
        throw error;
    }
};

// Create a new member
export const createMember = async (newMember) => {
    try {
        const response = await fetch('/createMember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMember),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating member:', error);
        throw error;
    }
};

// Update a member by ID
export const updateMember = async (id, updatedMember) => {
    try {
        await fetch(`/updateMember/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMember),
        });
        return updatedMember;
    } catch (error) {
        console.error('Error updating member:', error);
        throw error;
    }
};

// Delete a member by ID
export const deleteMember = async (id) => {
    try {
        await fetch(`/deleteMember/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting member:', error);
        throw error;
    }
};
