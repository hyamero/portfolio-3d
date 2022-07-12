import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'

import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { DoubleSide } from 'three'

const ColorShiftMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.TextureLoader().load(
      'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    ),
    // color: new THREE.Color(0.05, 0.0, 0.025),
  },
  vertex,
  fragment
)

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
ColorShiftMaterial.key = THREE.MathUtils.generateUUID()

extend({ ColorShiftMaterial })

const Shader = (props) => {
  const meshRef = useRef(null)
  const router = useStore((state) => state.router)

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    // if (meshRef.current) {
    //   meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    // }
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.uTime.value = time * 0.5
    }
  })

  return (
    <>
      <mesh
        ref={meshRef}
        onClick={() => {
          router.push(`/`)
        }}
        {...props}
      >
        <planeBufferGeometry args={[0.4, 0.6, 32, 32]} />
        {/* @ts-ignore */}
        <colorShiftMaterial
          key={ColorShiftMaterial.key}
          uTime={3}
          side={DoubleSide}
        />
      </mesh>
    </>
  )
}

export default Shader
