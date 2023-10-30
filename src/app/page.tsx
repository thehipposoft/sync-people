import Link from 'next/link'


export default function Home() {
  return (
    <main className="">
      <Link href={'/talents'} className='text-5xl text-center mt-20 font-semibold flex justify-center hover:underline'>Go to talents</Link>
      <Link href={'/signUp'} className='text-5xl text-center mt-20 font-semibold flex justify-center hover:underline'>Sign Up</Link>
    </main>
  )
}
