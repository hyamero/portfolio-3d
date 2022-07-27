import { useEffect, useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { Loader } from '@/components/dom/Loader'
import { Navbar } from '../dom/Navbar'
import { useRouter } from 'next/router'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  const [unmount, setUnmount] = useState<boolean>(false)
  const router = useRouter()
  const path = router.pathname

  const [zIndex, setZIndex] = useState('z-10')

  useEffect(() => {
    if (path !== '/') {
      if (path === '/contact' && unmount) {
        setZIndex('z-10')
      } else {
        setZIndex('z-12')
      }
    } else setZIndex('z-10')
  }, [path, unmount])

  return (
    <>
      <Navbar />
      <div
        className={`${zIndex} absolute top-0 left-0 w-screen h-screen px-5 mx-auto overflow-hidden sm:px-10 lg:px-20 dom`}
        ref={ref}
      >
        {!unmount && path === '/' ? <Loader setUnmount={setUnmount} /> : null}
        {children}
      </div>
    </>
  )
}

export default Dom
