import Link from 'next/link';
import React, { FC } from 'react';

interface HobbyItemProps {
  icon: string;
  link: string;
  isStyle?: boolean;
}

const HobbyItem: FC<HobbyItemProps> = ({ icon, link, isStyle }) => {
  return (
    <li className='flex flex-row gap-1 items-center'>
      <span
        className={`${isStyle ? 'px-[0.25em] rounded-[5px] bg-accent text-bg' : 'text-base text-text '}`}
      >
        {icon}
      </span>
      <Link
        href={'#'}
        className='rounded-[0.125rem] hover:bg-link hover:text-bg text-base text-link'
      >
        {link}
      </Link>
    </li>
  );
};

export default HobbyItem;
