import useStore from '@/helpers/store'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { useRef } from 'react'
import * as THREE from 'three'
import { Vector3 } from 'three'
import { GLTF } from 'three-stdlib'

const ModelComponent = ({}) => {
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
      {/* <Zoom /> */}
    </>
  )
}

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    Default_OBJ: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

function Model(props) {
  const group = useRef<THREE.Group>()
  const { nodes } = useGLTF('/marble_head.gltf') as GLTFResult
  useFrame(({ pointer }) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * (Math.PI / 16),
      0.005
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * -(Math.PI / 16),
      0.005
    )
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.5, 6, -8]}
        rotation={[-1.51, 0, Math.PI * 1.8]}
        scale={3.5}
      >
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry}>
          <meshStandardMaterial roughness={0} metalness={0.5} color='#474747' />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} />
      </group>
      <Lights />
    </group>
  )
}

function Lights() {
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
      pointer.x * -12,
      0.05
    )
    front.current.position.y = THREE.MathUtils.lerp(
      front.current.position.y,
      6 + pointer.y * -4,
      0.05
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
        position={[0, 0, 4]}
        distance={14}
        intensity={15}
        shadow-mapSize={[2048, 2048]}
      />
    </>
  )
}

// function Zoom() {
//   useFrame((state) => {
//     state.camera.position.lerp({ x: 0, y: 0, z: 12 } as Vector3, 0.005)
//     state.camera.lookAt(0, 0, 0)
//   })
// }

useGLTF.preload('/marble_head.gltf')

export default ModelComponent
