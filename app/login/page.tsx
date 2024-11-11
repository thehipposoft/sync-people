import React from 'react';
import LoginMenu from '@/app/login/Login';
import PublicLayout from '@/components/PublicLayout';

export default async function LoginPage() {
    return(
        <PublicLayout>
            <LoginMenu />
        </PublicLayout>
    )
}

