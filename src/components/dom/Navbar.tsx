import useStore from '@/helpers/store'
import React from 'react'

export const Navbar: React.FC = ({}) => {
  const router = useStore((s) => s.router)

  return (
    <nav className='absolute top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-5 pt-5 pb-1 border-b sm:px-10 lg:px-20 text-white/75 border-b-white/20'>
      <span
        className='text-xl cursor-pointer font-fog mix-blend-difference'
        onClick={() => router.push('/')}
      >
        Dale B.
      </span>
      <ul className='flex text-sm font-light tracking-wider space-x-4  md:space-x-10 font-ubuntu [&>*]:cursor-pointer [&>*]:leading-none [&>*:hover]:text-white [&>*]:transition-all'>
        <li onClick={() => router.push('/')}>HOME</li>
        <li onClick={() => router.push('/projects')}>PROJECTS</li>
        <li onClick={() => router.push('/contact')}>CONTACT</li>
      </ul>
    </nav>
  )
}
