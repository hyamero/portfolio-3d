import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'

import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { DoubleSide } from 'three'

const Shader = (props) => {
  const ColorShiftMaterial = shaderMaterial(
    {
      uTime: 0,
      uTexture: new THREE.TextureLoader().load(props.image.src),
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
  const meshRef = useRef(null)
  const router = useStore((state) => state.router)

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.uTime.value = time * 0.4
    }
  })

  return (
    <>
      <mesh
        ref={meshRef}
        {...props}
        onPointerEnter={(e) => (document.body.style.cursor = 'pointer')}
        onPointerLeave={(e) => (document.body.style.cursor = 'auto')}
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
