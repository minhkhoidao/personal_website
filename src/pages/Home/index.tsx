import LastestStatus from '@/containers/LastestStatus';
import More from '@/containers/More';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <Image
          src='https://i.ibb.co/xCcXbqg/avatar-Glitch.webp'
          width={72}
          height={72}
          alt='home-gif'
          className='rounded-[15px] border-dashed border-[2px] border-accent p-[0.125rem]'
        />
        <div className='caption text-base text-text'>👋 yellow</div>
      </div>
      <LastestStatus />
      <More />
    </div>
  );
};

export default Home;
