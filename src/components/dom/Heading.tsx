import { FiArrowUpRight } from 'react-icons/fi'

export const Heading = () => {
  return (
    <main className='relative flex items-center justify-between h-full px-20'>
      <span className='relative self-start text-xl font-light uppercase pointer-events-none indent-10 text-white/50 font-ubuntu whitespace-nowrap top-64'>
        Hey I&apos;m &nbsp;
        <h1 className='inline text-3xl italic normal-case text-white/60 font-fog'>
          Joseph Dale Bañares.
        </h1>{' '}
        <br />A <span className='italic'>Front-End</span>&nbsp; Web Developer
        Based in <br />
        The Philippines.
      </span>
      <Socials />
      <div className='relative self-end pointer-events-none bottom-32'>
        <div className='flex flex-col'>
          <h2 className='relative italic text-8xl text-white/60 font-fog right-5'>
            <span className='relative text-9xl left-2'>W</span>eb&nbsp;
            <span className='text-9xl'>D</span>e
            <span className='font-light font-ubuntu'>v</span>e
            <span className='font-light font-ubuntu'>l</span>o
            <span className='font-light font-ubuntu'>p</span>er
          </h2>
          <div className='flex justify-around'>
            <span className='text-xl font-light uppercase text-white/50 font-ubuntu indent-10 whitespace-nowrap'>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design and Develop
              Websites
              <br />
              From 2D Web Elements to 3D Web <br /> Integrations.
            </span>
            <button className='relative flex items-center self-end text-2xl italic font-light leading-none tracking-wider pointer-events-auto text-white/70  right-5 bottom-2 transition-all font-fog hover-effect'>
              Projects
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

const Socials: React.FC = () => {
  return (
    <ul className='absolute left-0 flex text-sm font-light tracking-widest bottom-10 text-white/70 space-x-5 font-ubuntu [&>li]:flex [&>li]:items-center [&>li]:cursor-pointer [&>li]:transition-all'>
      <li className=' hover:text-white'>
        <a href='https://github.com/hyamero'>GITHUB</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.instagram.com/dale.hyamero/?hl=en'>INSTAGRAM</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.linkedin.com/in/daleban/'>LINKEDIN</a>
        <FiArrowUpRight />
      </li>
    </ul>
  )
}
