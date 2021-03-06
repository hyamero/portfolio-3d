import { useEffect, useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { Loader } from '@/components/dom/Loader'
import { Navbar } from '../dom/Navbar'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  const [unmount, setUnmount] = useState<boolean>(false)

  return (
    <>
      <Navbar />
      <div
        className='absolute top-0 left-0 z-10 w-screen h-screen px-5 mx-auto overflow-hidden sm:px-10 lg:px-20 dom'
        ref={ref}
      >
        {!unmount && <Loader setUnmount={setUnmount} />}
        {children}
      </div>
    </>
  )
}

export default Dom
