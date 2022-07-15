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
  const posY = -0.5

  const images = [
    {
      title: 'Uno',
      position: [-0.1, -1 + posY, -0.09],
      src: 'https://images.unsplash.com/photo-1654787004033-dbf0ef364cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },

    {
      title: 'Dos',
      position: [0.1, -2 + posY, -0.2],
      src: 'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },

    {
      title: 'Tres',
      position: [-0.1, -3 + posY, -0.09],
      src: 'https://images.unsplash.com/photo-1654787004033-dbf0ef364cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },

    {
      title: 'Cuatro',
      position: [0.1, -4 + posY, -0.2],
      src: 'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },

    {
      title: 'Cinco',
      position: [-0.1, -5 + posY, -0.09],
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

      <ScrollControls
        pages={6.5}
        distance={1}
        damping={4}
        horizontal={false}
        infinite={false}
      >
        <fog attach='fog' args={[0x050505, 0, 6]} />
        <Scroll>
          <Sparkles
            count={40}
            position={[0, -2, 0]}
            scale={[6, 10, 10]}
            size={1}
            speed={2}
          />

          <Shader
            image={
              'https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            position={[0, -0.2, -1]}
            planeArgs={[6, 4, 32, 32]}
            planeRotation={[-Math.PI / 2.3, 0, 0]}
            wireframe={true}
            pointer={false}
          />

          {images.map((image, i) => {
            const { position, src } = image

            return (
              <>
                <Shader
                  key={i}
                  image={src}
                  position={position}
                  planeArgs={[0.4, 0.6, 32, 32]}
                  planeRotation={[0, 0, 0]}
                  wireframe={false}
                  pointer={true}
                />
              </>
            )
          })}
          <Text
            position={[0, 0.5, -2.4]}
            rotation={[-0.3, 0, 0]}
            lineHeight={1.3}
            fillOpacity={1}
            font='/FogtwoNo5.otf'
            fontSize={width / 2.4}
            material-toneMapped={false}
            anchorX='center'
            anchorY='middle'
          >
            Projects
          </Text>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default Projects
