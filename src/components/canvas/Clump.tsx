import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Physics, useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { Sparkles, Html, Loader, Text } from '@react-three/drei'
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { Rig } from '@/components/canvas/SceneIndex'

interface ClumpProps {}

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 48, 48)
const baubleMaterial = new THREE.MeshLambertMaterial({
  color: '#474747',
  emissive: 'black',
})

const Clump: React.FC<ClumpProps> = ({}) => {
  return (
    <>
      <color attach='background' args={['#050505']} />
      <fog attach='fog' args={[0x050505, 0, 28]} />
      <Lights />
      <Sparkles count={60} scale={[20, 20, 10]} size={1} speed={2} />
      <Title>{'hyamero@daleban.tech'}</Title>
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <Physics gravity={[0, 5, 0]} iterations={10}>
          <Pointer />
          <Balls />
        </Physics>
      </Suspense>
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
      <Rig />
    </>
  )
}

function Balls({ mat = new THREE.Matrix4(), vec = new THREE.Vector3() }) {
  const [ref, api] = useSphere<any>(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }))
  useFrame((state) => {
    for (let i = 0; i < 50; i++) {
      ref.current.getMatrixAt(i, mat)
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-20)
            .toArray(),
          [0, 0, 0]
        )
    }
  })

  return (
    <instancedMesh
      ref={ref as any}
      castShadow
      receiveShadow
      args={[null, null, 60]}
      geometry={sphereGeometry}
      material={baubleMaterial}
      position={[0, -2, -15]}
    />
  )
}

function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [, api] = useSphere(() => ({
    type: 'Kinematic',
    args: [3],
    position: [0, 0, 0],
  }))
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  )
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color='white'
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, -15, -0]} intensity={1} color='#f1f1f1' />
    </>
  )
}

function Title({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -8.5]}
      rotation={[-0.3, 0, 0]}
      lineHeight={1.3}
      font='/FogtwoNo5.otf'
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'
      onClick={() => (window.location.href = 'mailto:hyamero@daleban.tech')}
      onPointerEnter={() => (document.body.style.cursor = 'pointer')}
      onPointerLeave={() => (document.body.style.cursor = 'auto')}
    >
      {children}
      <meshBasicMaterial color='#c4c4c4' />
    </Text>
  )
}

export default Clump
