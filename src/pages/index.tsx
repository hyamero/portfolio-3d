import React from 'react'
import { Heading } from '@/components/dom/Heading'
import dynamic from 'next/dynamic'

const SceneIndex = dynamic(() => import('@/components/canvas/SceneIndex'), {
  ssr: false,
})

const Page = (props) => {
  return (
    <>
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
