import React from 'react'
import Header from '../../../components/Header'
import Welcome from '../../../components/Welcome'
import ProfileDashboard from '../../../components/ProfileDashboard'
import ProfileForm from '../../../components/ProfileForm'
import ProfilePreview from '../../../components/ProfilePreview'

export default async function ProfilePage() {
    return(
        <div className="">
            <Header />
            <Welcome />
            <ProfileDashboard />
            <ProfileForm />
            <ProfilePreview />
        </div>
    )
}
