import useStore from '@/helpers/store'
import { Sparkles, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { Vector3 } from 'three'
import { Model } from './Model'

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
      <Model
        onClick={() => router.push('/about')}
        position={[0, -6, 0]}
        rotation={[0, -0.2, 0]}
      />
      <Sparkles count={50} scale={[20, 20, 10]} size={1} speed={2} />
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  )
}

useGLTF.preload('/marble_head.gltf')

export default SceneIndex
