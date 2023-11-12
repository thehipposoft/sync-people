import React from 'react'
import Image from 'next/image'

const RegisterMenu = (openMenu:any) => {
  return (
    <div className={`w-[90vw] h-screen mx-auto bg-amber-300 absolute flex justify-center hidden ${ openMenu ? 'register-menu register-menu-open' : 'register-menu'}`}>
      <div className='w-1/2'>
        <Image src={'/assets/images/register.png'} alt={''} width={250} height={300} />
      </div>
      <div className='w-1/2'>
        <form>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
            <ul>4</ul>
        </form>
      </div>
    </div>
  )
}

export default RegisterMenu
