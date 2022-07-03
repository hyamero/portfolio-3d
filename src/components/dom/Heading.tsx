import { FiArrowUpRight } from 'react-icons/fi'

export default function Heading() {
  return (
    <main className='flex items-center justify-between h-full'>
      <div className='flex flex-col justify-between h-full pb-10'>
        <span className='relative self-start font-light uppercase pointer-events-none indent-10 text-white/60 font-ubuntu whitespace-nowrap top-40 left-10'>
          Hey I&apos;m &nbsp;
          <h1 className='inline underline underline-offset-1'>
            Joseph Dale Bañares.
          </h1>{' '}
          <br />A <span className='italic'>Front-End</span>&nbsp; Web Developer
          Based in <br />
          The Philippines.
        </span>
        <Socials />
      </div>
      <div className='relative self-end pointer-events-none right-20 bottom-32'>
        <h2 className='relative text-6xl text-white/75 font-fog right-5'>
          <span className='relative text-7xl left-2'>W</span>eb&nbsp;
          <span className='text-7xl'>D</span>
          <span className='font-light font-ubuntu'>evel</span>o
          <span className='font-light font-ubuntu'>p</span>er
        </h2>
        <span className='font-light uppercase text-white/60 font-ubuntu indent-10 whitespace-nowrap'>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design and Develop
          Websites
          <br />
          From 2D Web Elements to 3D Web <br /> Integrations.
        </span>
      </div>
    </main>
  )
}

const Socials: React.FC = () => {
  return (
    <ul className='relative flex text-xs font-light tracking-widest underline text-white/70  space-x-5 font-ubuntu underline-offset-2'>
      <li className='flex items-end cursor-pointer transition-all hover:text-white'>
        <a href='https://github.com/hyamero'>GITHUB</a>
        <FiArrowUpRight />
      </li>
      <li className='flex items-end cursor-pointer transition-all hover:text-white'>
        <a href='https://www.instagram.com/dale.hyamero/?hl=en'>INSTAGRAM</a>
        <FiArrowUpRight />
      </li>
      <li className='flex items-end cursor-pointer transition-all hover:text-white'>
        <a href='https://www.linkedin.com/in/daleban/'>LINKEDIN</a>
        <FiArrowUpRight />
      </li>
    </ul>
  )
}
