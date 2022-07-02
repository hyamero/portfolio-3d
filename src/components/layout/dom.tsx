import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { Navbar } from '../dom/Navbar'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      className='absolute top-0 left-0 z-10 w-screen h-screen px-20 mx-auto overflow-hidden dom'
      ref={ref}
    >
      <Navbar />
      {children}
    </div>
  )
}

export default Dom
