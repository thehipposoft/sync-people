import React, {useState} from 'react'
import Image from 'next/image'

const RegisterMenu = ({ menuIsOpen, closeMenu }:any) => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

/*
const handleSubmit = (e:any) => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    );
    console.log(JSON.stringify(data))
};
*/

  return (
    <div className={`fixed flex w-full left-0 top-0 duration-700 bg-[#EBEFFF] ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className={`w-[80vw] h-screen mx-auto bg-[#EBEFFF] relative flex justify-center`}>
            <div className='w-1/2 flex flex-col'>
                <div className='relative h-[500px] max-w-[545px]'>
                    <div className='triangle h-[350px] w-[250px] absolute left-[-44%]'/>
                    <div className=' bg-[#FF8149] h-[450px] w-[350px] absolute rounded-b-[100px]'/>
                    <Image className='absolute z-10 top-8 left-[-10px]' src={'/assets/images/register.png'} alt={''} width={375} height={300} />
                </div>
                <div className='relative flex justify-between w-[350px]'>
                    <Image src={'/assets/logo.svg'} width={150} height={100} alt='Sync logo' />
                    <div className='flex justify-end items-end'>
                        <Image src={'/assets/images/vectors/facebook.svg'} width={30} height={30} alt='icon'  />
                        <Image src={'/assets/images/vectors/twitter.svg'} width={30} height={30} alt='icon' className='mx-4' />
                        <Image src={'/assets/images/vectors/linkedin.svg'} width={30} height={30} alt='icon' />
                    </div>
                </div>
            </div>
            <div className='w-1/2 pt-8'>
                <h4 className='md:pt-8 font-semibold'>Please fill out our form to Register!</h4>
                <form 
                className='md:pt-2 md:w-[450px]'
                >
                    <section className='flex flex-col'>
                        <label htmlFor="text" >Full name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Password:</label>
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Confirm Password:</label>
                        <input type="password" name="" id=""/>
                    </section>
                    <section>
                        <input 
                            type="submit" 
                            value="Register" 
                            className='purple-b md:py-2 md:px-8 md:mt-2 cursor-pointer'
                        />
                    </section>
                    <p className='text-center pt-3'>Already have an account? <a href="/login" className='font-semibold underline'>Login</a></p>
                </form>
            </div>
            <div className='absolute right-11 top-4 font-extrabold cursor-pointer' onClick={closeMenu}>&larr; </div>
        </div>
    </div>
  )
}

export default RegisterMenu
