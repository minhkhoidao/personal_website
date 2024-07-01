import { FC } from 'react';

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className='flex items-center gap-3'>
      <span className='text-accent text-[28px] font-[700]'>#</span>
      <h2 className='text-text text-[28px] font-[700]'>{title}</h2>
    </div>
  );
};

export default Heading;
