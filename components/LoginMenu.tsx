import React from 'react'

const LoginMenu = () => {
  return (
    <div className='flex h-screen'>
        <div className='flex items-center md:pl-20 md:w-[60%] bg-slate-400'>
            <div>
                <h1>Welcome back!</h1>
                <form className='md:pt-6 md:w-[500px]'>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Username:</label>
                        <input type="text" name="Full name" id="" />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Password:</label>
                        <input type="password" name="" id=""/>
                    </section>
                    <section>
                        <input type="submit" value="Login" className='purple-b md:py-2 md:px-8 md:mt-8' />
                    </section> 
                </form>
                <p className='text-center'>Don't have an account? <a href="/" className='font-semibold underline'>Register</a></p>
            </div>
        </div>
        <div className='md:bg-indigo-600 md:w-[40%]'>

        </div>
    </div>
  )
}

export default LoginMenu
