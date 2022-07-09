import useStore from '@/helpers/store'
import React from 'react'

export const Navbar: React.FC = ({}) => {
  const router = useStore((s) => s.router)

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-20 pt-5 pb-1 text-white border-b border-b-white/20'>
      <span
        className='text-lg cursor-pointer font-fog mix-blend-difference'
        onClick={() => router.push('/')}
      >
        Dale B.
      </span>
      <ul className='flex text-sm font-light tracking-wider space-x-10 font-ubuntu [&>*]:cursor-pointer [&>*]:leading-none'>
        <li onClick={() => router.push('/')} className='hover-effect'>
          HOME
        </li>
        <li onClick={() => router.push('/about')} className='hover-effect'>
          PROJECTS
        </li>
        <li onClick={() => router.push('/contact')} className='hover-effect'>
          CONTACT
        </li>
      </ul>
    </nav>
  )
}
