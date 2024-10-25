// src/pages/MemberPage.js
import React, { useState, useEffect } from 'react';
import MemberList from '../components/MemberList';
import CreateMemberForm from '../components/CreateMemberForm';
import { fetchMembers, createMember, updateMember, deleteMember } from '../services/memberService';

function MemberPage() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        try {
            const data = await fetchMembers();
            setMembers(data);
        } catch (error) {
            console.error('Error loading members:', error);
        }
    };

    const handleAddMember = async (newMember) => {
        try {
            const createdMember = await createMember(newMember);
            setMembers([...members, createdMember]);
        } catch (error) {
            console.error('Error creating member:', error);
        }
    };

    const handleUpdateMember = async (id, updatedMember) => {
        try {
            await updateMember(id, updatedMember);
            setMembers(members.map(member =>
                member.id === id ? { ...member, ...updatedMember } : member
            ));
        } catch (error) {
            console.error('Error updating member:', error);
        }
    };

    const handleDeleteMember = async (id) => {
        try {
            await deleteMember(id);
            setMembers(members.filter(member => member.id !== id));
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    return (
        <div>
            <CreateMemberForm addMember={handleAddMember} />
            <MemberList
                members={members}
                updateMember={handleUpdateMember}
                deleteMember={handleDeleteMember}
            />
        </div>
    );
}

export default MemberPage;
