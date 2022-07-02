export default function Heading() {
  return (
    <main className='flex items-center justify-between h-screen'>
      <span className='relative self-start font-light uppercase pointer-events-none indent-10 text-white/60 font-ubuntu whitespace-nowrap top-36 left-10'>
        Hey I&apos;m &nbsp;
        <h1 className='inline underline'>Joseph Dale Bañares.</h1> <br />A{' '}
        <span className='italic'>Front-End</span>&nbsp; Web Developer Based in{' '}
        <br />
        The Philippines
      </span>
      <div className='relative self-end pointer-events-none right-10 bottom-40'>
        <h2 className='relative text-6xl text-white font-fog right-5'>
          Web D<span className='font-light font-ubuntu'>evel</span>o
          <span className='font-light font-ubuntu'>p</span>er
        </h2>
        <span className='font-light uppercase text-white/60 font-ubuntu indent-10 whitespace-nowrap'>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design and Develop
          Websites
          <br />
          From 2D Web Elements to 3D Web <br /> Integrations
        </span>
      </div>
    </main>
  )
}
