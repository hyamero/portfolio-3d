import useStore from '@/helpers/store'
import React from 'react'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useStore((s) => s.router)

  return (
    <nav className='flex justify-between w-screen px-20 pt-10 text-white'>
      <span className='text-xl font-fog'>Dale B.</span>
      <span
        className='font-light tracking-widest cursor-pointer font-ubuntu'
        onClick={() => router.push('/about')}
      >
        EXPERIENCE
      </span>
    </nav>
  )
}
