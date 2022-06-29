import Heading from '@/components/dom/Heading'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('@/components/canvas/Model'), {
  ssr: false,
})

const Page = (props) => {
  return <>{/* <Heading /> */}</>
}

Page.r3f = (props) => (
  <>
    <Model />
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
