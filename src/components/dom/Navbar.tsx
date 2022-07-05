import useStore from '@/helpers/store'
import React, { useEffect } from 'react'

export const Navbar: React.FC = ({}) => {
  const router = useStore((s) => s.router)

  useEffect(() => {
    const menuItems = [...(document.querySelectorAll('.menu-item') as any)]
    menuItems.forEach((item: any) => {
      let word = item.children[0].children[0].innerText.split('')
      item.children[0].innerHTML = ''
      word.forEach((letter: string, idx: number) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`
      })

      let cloneDiv = item.children[0].cloneNode(true)
      cloneDiv.style.position = 'absolute'
      cloneDiv.style.left = '0'
      cloneDiv.style.top = '0'
      item.appendChild(cloneDiv)
    })
  }, [])

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-20 pt-5 pb-1 text-white border-b border-b-white/20'>
      <span
        className='text-lg cursor-pointer font-fog'
        onClick={() => router.push('/')}
      >
        Dale B.
      </span>
      <a href='#' className='menu-item' onClick={() => router.push('/about')}>
        <div>
          <span className='text-sm font-light tracking-widest cursor-pointer menu-item-text font-ubuntu'>
            EXPERIENCE
          </span>
        </div>
      </a>
    </nav>
  )
}
