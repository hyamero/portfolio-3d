import { a, useChain, useSpring, useSpringRef } from '@react-spring/web'
import Heading from '@/components/dom/Heading'
import dynamic from 'next/dynamic'
import React from 'react'

const SceneIndex = dynamic(() => import('@/components/canvas/SceneIndex'), {
  ssr: false,
})

const Page = (props) => {
  const bgSpringRef = useSpringRef()
  const bgSpring = useSpring({
    ref: bgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 800 },
    delay: 300,
  })

  const textSpringRef = useSpringRef()
  const textSpring1 = useSpring({
    ref: textSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 800 },
    delay: 1000,
  })

  useChain([textSpringRef, bgSpringRef])

  return (
    <>
      <a.div
        ref={bgSpringRef}
        style={bgSpring}
        className='absolute top-0 left-0 z-30 flex items-center justify-center w-screen h-screen text-3xl text-white bg-black font-fog'
      >
        <a.span ref={textSpringRef} style={textSpring1}>
          Joseph Dale Bañares
        </a.span>
      </a.div>
      <Heading />
    </>
  )
}

Page.r3f = (props) => (
  <>
    <SceneIndex />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Dale',
    },
  }
}
