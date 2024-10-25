import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MemberPage from './pages/MemberPage';
import TaskPage from './pages/TaskPage';
//import AboutPage from './pages/AboutPage';

function App() {
    return (
        <Router>
            <Header />
            <main style={{ padding: '20px', backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
                <Routes>
                    <Route path="/memberPage" element={<MemberPage />} />
                    <Route path="/taskPage" element={<TaskPage />} />

                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;



/*import React, { useState, useEffect } from 'react';
import MemberList from './components/MemberList';
import CreateMemberForm from './components/CreateMemberForm';

function App() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetch('/getMembers');
            const data = await response.json();
            setMembers(data);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    const addMember = async (newMember) => {
        try {
            const response = await fetch('/createMember', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMember),
            });
            const createdMember = await response.json();
            setMembers([...members, createdMember]);
        } catch (error) {
            console.error('Error creating member:', error);
        }
    };

    const updateMember = async (id, updatedMember) => {
        try {
            await fetch(`/updateMember/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedMember),
            });
            // Update the member in the state
            setMembers(members.map(member =>
                member.id === id ? { ...member, name: updatedMember.name } : member
            ));
        } catch (error) {
            console.error('Error updating member:', error);
        }
    };

    const deleteMember = async (id) => {
        try {
            await fetch(`/deleteMember/${id}`, {
                method: 'DELETE',
            });
            setMembers(members.filter(member => member.id !== id));
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    return (
        <div>
            <CreateMemberForm addMember={addMember} />
            <MemberList
                members={members}
                updateMember={updateMember}
                deleteMember={deleteMember}
            />
        </div>
    );
}

export default App;*/