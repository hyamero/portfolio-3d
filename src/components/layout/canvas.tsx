import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stats } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control.current) {
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action']
      domElement.style['touch-action'] = 'none'

      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  const router = useRouter()
  const path = router.pathname

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        zIndex: `${path !== '/projects' ? 9 : 11}`,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
      shadows
      camera={{ position: [0, 1.5, 14], fov: 50 }}
    >
      {/* <LControl /> */}
      <Preload all />
      {children}
      {/* <Stats /> */}
    </Canvas>
  )
}

export default LCanvas
