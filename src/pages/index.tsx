import React from 'react'
import { IndexOverlay } from '@/components/dom/IndexOverlay'
import dynamic from 'next/dynamic'

const SceneIndex = dynamic(() => import('@/components/canvas/SceneIndex'), {
  ssr: false,
})

const Page = (props) => {
  return (
    <>
      <IndexOverlay />
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
      title: 'Dale Bañares | Creative Developer',
    },
  }
}
