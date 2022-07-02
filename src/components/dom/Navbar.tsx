import useStore from '@/helpers/store'
import React from 'react'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useStore((s) => s.router)

  return (
    <nav className='flex items-center justify-between w-full pt-10 text-white'>
      <span className='text-lg font-fog'>Dale B.</span>
      <span
        className='text-sm font-light tracking-widest cursor-pointer font-ubuntu'
        onClick={() => router.push('/about')}
      >
        EXPERIENCE
      </span>
    </nav>
  )
}
