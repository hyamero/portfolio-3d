import useStore from '@/helpers/store'
import { Html, Loader, Sparkles, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { Vector3 } from 'three'
import { Model } from './Model'
import * as THREE from 'three'
import { Suspense } from 'react'

const SceneIndex = ({}) => {
  const router = useStore((s) => s.router)

  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: 0, z: 12 } as Vector3, 0.005)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <color attach='background' args={['#050505']} />
      <fog attach='fog' args={[0x050505, 0, 28]} />
      <pointLight position={[0, 10, -7]} intensity={1} />
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <Model
          onClick={() => router.push('/about')}
          position={[0, -6, 0]}
          rotation={[0, -0.2, 0]}
        />
        <Title>{`Joseph Dale`}</Title>
        <TitleL>{`Joseph Dale`}</TitleL>
      </Suspense>
      <Sparkles count={60} scale={[20, 20, 10]} size={1} speed={2} />
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={2}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <Rig />
    </>
  )
}

function Title({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -10]}
      lineHeight={1.3}
      font='/FogtwoNo5.otf'
      fontSize={width / 3.5}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'
    >
      {children}
      <meshBasicMaterial color='#c4c4c4' />
    </Text>
  )
}

function TitleL({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -10]}
      lineHeight={1.3}
      font='/FogtwoNo5.otf'
      fontSize={width / 3.5}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'
    >
      {children}
      <meshStandardMaterial roughness={1} metalness={0.5} color='#474747' />
    </Text>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(-state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    )
  })
}

export default SceneIndex
