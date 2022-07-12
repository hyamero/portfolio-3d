import {
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sparkles,
  Text,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'
import Shader from './Shader/Shader'

const Projects: React.FC = () => {
  const images = [
    {
      position: [0, 0, 0],
      src: 'https://images.unsplash.com/photo-1654787004033-dbf0ef364cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },

    {
      position: [1, -0.1, -0.4],
      src: 'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },

    {
      position: [2, 0.1, -0.02],
      src: 'https://images.unsplash.com/photo-1654787004033-dbf0ef364cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },

    {
      position: [3, -0.1, -0.2],
      src: 'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },

    {
      position: [4, 0, 0],
      src: 'https://images.unsplash.com/photo-1654787004033-dbf0ef364cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
  ]

  const { width } = useThree((state) => state.viewport)

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 1]}
        fov={55}
        near={0.1}
        far={100}
      />
      <Sparkles count={40} scale={[6, 6, 10]} size={1} speed={2} />
      <ScrollControls
        pages={3}
        distance={1}
        damping={4}
        horizontal={true}
        infinite={false}
      >
        <Scroll>
          {images.map((image) => {
            const { position, src } = image

            return <Shader key={src} image={image} position={position} />
          })}
        </Scroll>
        <Text
          position={[0, 0, -0.6]}
          rotation={[-0.3, 0, 0]}
          lineHeight={1.3}
          fillOpacity={0.08}
          font='/FogtwoNo5.otf'
          fontSize={width / 2.4}
          material-toneMapped={false}
          anchorX='center'
          anchorY='middle'
        >
          PROJECTS
        </Text>
      </ScrollControls>
    </>
  )
}

export default Projects
