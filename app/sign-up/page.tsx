import SignUp from '@/app/sign-up/SignUp';
import PublicLayout from '@/components/PublicLayout';

export default async function SignUpPage() {
    return(
        <PublicLayout>
            <SignUp />
        </PublicLayout>
    )
}
