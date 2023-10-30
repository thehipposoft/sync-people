'use client'
import Link from "next/link"
import { Form } from "../../../components/Form"
import { required, email } from '../../../components/fieldValidations';
import ContactForm from "../../../components/formPrototype";


export default async function SignUpPage() {
    return(
        <div className="flex flex-col items-center bg-slate-400">
            <h1>Sign up of a Talent</h1>
                <ContactForm />
            <Link href={'/'} className="font-semibold hover:underline">Go back home</Link>
        </div>
    )
}


/*

<Form
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: 'First Name',
                        size: 'half',
                        placeholder: 'Name',
                        validations: [required]
                    },
                    {
                        name: 'lastname',
                        type: 'text',
                        label: 'Last Name',
                        size: 'half',
                        placeholder: 'Lastname',
                        validations: [required]
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: 'Email',
                        placeholder: 'Email',
                        validations: [required, email]
                    },
                    {
                        name: 'phone',
                        type: 'text',
                        label: 'Phone',
                        placeholder: 'Phone',
                        validations: [required]
                    },
                    {
                        name: 'dob',
                        type: 'date',
                        label: 'Date of birth',
                        placeholder: 'Date of birth',
                        validations: [required]
                    },
                    {
                        name: 'gender',
                        type: 'select',
                        label: 'To which gender identity do you most identify?',
                        selectOptions: [{value: 'male', label: 'Male'},{value: 'female', label: 'Female'},{value: 'other', label: 'Other'}],
                        validations: [required]
                    },
                    {
                        name: 'adress',
                        type: 'text',
                        label: 'Adress',
                        placeholder: 'Adress',
                        validations: [required]
                    },
                    {
                        name: 'state',
                        type: 'select',
                        label: 'State',
                        selectOptions: [
                        {value: 'victoria', label: 'Victoria'},
                        {value: 'new-south-wales', label: 'New South Wales'},
                        {value: 'queensland', label: 'Queensland'},
                        {value: 'south-australia', label: 'South Australia'},
                        {value: 'western-australia', label: 'Western Australia'},
                        {value: 'northern-territory', label: 'Northern Territory'},
                        {value: 'tasmania', label: 'Tasmania'},

                    ],
                        validations: [required]
                    },
                    {
                        name: 'cp',
                        type: 'text',
                        label: 'CP',
                        placeholder: 'CP',
                        validations: [required]
                    },
                    {
                        name: 'language',
                        type: 'select',
                        label: 'Languages',
                        multiple: true,
                        selectOptions: [
                        {value: 'spanish', label: 'Spanish'},
                        {value: 'french', label: 'French'},
                        {value: 'german', label: 'German'},
                        {value: 'portuguese', label: 'Portuguese'},
                        {value: 'chinese', label: 'Chinese'},
                        {value: 'arabic', label: 'Arabic'},
                        {value: 'hebreum', label: 'Hebreum'},
                        {value: 'japanese', label: 'Japanese'},

                    ],
                        validations: [required]
                    },
                ]}
                onSuccessMessage={'Your message was sent successfully. We will contact you as soon as possible.'}
                onErrorMessage={'Please try again in a few minutes.'}
                submitButtonLabel={'Send message'}
                emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/diversity-email'}
            />

*/