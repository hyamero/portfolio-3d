import * as THREE from 'three'
import { useFrame, extend, Vector3, Euler } from '@react-three/fiber'
import { useRef } from 'react'
import { shaderMaterial } from '@react-three/drei'

import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { DoubleSide } from 'three'

interface ShaderProps {
  url?: string
  image: string
  pointer?: boolean
  position?: Vector3
  planeArgs: [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ]
  wireframe?: boolean
  planeRotation: Euler
}

const Shader: React.FC<ShaderProps> = ({
  url,
  image,
  pointer,
  position,
  planeArgs,
  wireframe,
  planeRotation,
}) => {
  const ColorShiftMaterial = shaderMaterial(
    {
      uTime: 0,
      uTexture: new THREE.TextureLoader().load(image),
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

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.uTime.value = time * 0.4
    }
  })

  const openInNewTab = (href: string) => {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: href,
    }).click()
  }

  return (
    <>
      <mesh
        ref={meshRef}
        onPointerEnter={(e) => {
          if (pointer) document.body.style.cursor = 'pointer'
          else return
        }}
        onPointerLeave={(e) => {
          if (pointer) document.body.style.cursor = 'auto'
          else return
        }}
        onClick={() => url && openInNewTab(url)}
        rotation={planeRotation}
        position={position}
      >
        <planeBufferGeometry args={planeArgs} />
        {/* @ts-ignore */}
        <colorShiftMaterial
          key={ColorShiftMaterial.key}
          uTime={3}
          side={DoubleSide}
          wireframe={wireframe}
        />
      </mesh>
    </>
  )
}

export default Shader
