import useStore from '@/helpers/store'
import React from 'react'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useStore((s) => s.router)

  return (
    <nav className='fixed top-0 left-0 right-0 flex items-center justify-between w-full px-20 pt-5 pb-1 text-white border-b border-b-white/20'>
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
