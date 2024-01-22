import React from 'react';
import CreateProfile from '../../../components/CreateProfile';
import Header from '../../../components/Header';
import ProfileDashboard from '../../../components/ProfileDashboard';
import ProfileForm from '../../../components/ProfileForm';

function CreateProfilePage() {
    return (
        <div>
            <Header />
            <ProfileDashboard />
        </div>
    );
}

export default CreateProfilePage;