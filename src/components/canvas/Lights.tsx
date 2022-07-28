import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

export const Lights = ({}) => {
  const groupL = useRef(null)
  const groupR = useRef(null)
  const front = useRef(null)

  useFrame(({ pointer }) => {
    groupL.current.rotation.y = THREE.MathUtils.lerp(
      groupL.current.rotation.y,
      -pointer.x * (Math.PI / 2),
      0.1
    )
    groupR.current.rotation.y = THREE.MathUtils.lerp(
      groupR.current.rotation.y,
      pointer.x * (Math.PI / 2),
      0.1
    )
    front.current.position.x = THREE.MathUtils.lerp(
      front.current.position.x,
      -0.6 + pointer.x * -7,
      0.07
    )
    front.current.position.y = THREE.MathUtils.lerp(
      front.current.position.y,
      6 + pointer.y * -4,
      0.07
    )
  })

  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={10} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, -18]} distance={15} intensity={10} />
      </group>
      <spotLight
        castShadow
        ref={front}
        penumbra={0.75}
        angle={Math.PI / 6}
        position={[0, 0, 2]}
        distance={14}
        intensity={10}
        shadow-mapSize={[2048, 2048]}
      />
    </>
  )
}
