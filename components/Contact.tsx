import Image from 'next/image';
import { Form } from './Form';

const Contact = () => {
  return (
    <div className='flex justify-between md:px-20 md:max-w-[1350px] max-w-[85vw] mx-auto py-20 flex-wrap' id='contact'>
        <div className='xl:w-2/5 w-full md:p-4'>
            <h2 className='text-6xl tracking-tight md:tracking-normal'>Contact us</h2>
            <Form
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: '',
                        placeholder: 'First Name*',
                        required: true,
                    },
                    {
                        name: 'lastName',
                        type: 'text',
                        label: '',
                        placeholder: 'Last Name*',
                        required: true,
                    },
                    {
                        name: 'customerEmail',
                        type: 'email',
                        label: '',
                        placeholder: 'Email*',
                        required: true,
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: '',
                        placeholder: 'Message*',
                        required: true,
                    },
                ]}
                onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
                onErrorMessage={'Please, try again in some minutes'}
                submitButtonLabel={'Send'}
                emailServiceURL={'https://admin.insyncx.com/wp-json/insyncx/v1/contact'}
            />
        </div>
        <div className='relative w-full md:w-[450px] md:h-[525px] mx-auto xl:mx-0'>
            <div className='absolute left-0 z-10 h-full w-full rounded-tl-[250px] bg-gradient-to-l opacity-30 rounded-br-[250px] from-[#8D78E0] to-[#15DFBB] ' />
            <Image
                src={'/assets/images/contact-new.webp'}
                alt='Conctact us'
                width={450}
                height={525}
                className='object-cover rounded-br-[250px] rounded-tl-[250px] w-full h-full'
            />
        </div>
    </div>
  )
}

export default Contact
