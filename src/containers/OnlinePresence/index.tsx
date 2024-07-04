import Heading from '@/components/Heading';
import HobbyItem from '@/components/HobbyItem';
import React from 'react';

const OnlinePresence = () => {
  return (
    <div className='flex flex-col'>
      <Heading title='Online presence' />
      <ul className='list-hobby ml-6'>
        <HobbyItem icon='Email:' link='gogotuyer22@gmail.com' />
        <HobbyItem
          icon='Code repositories:'
          link='https://github.com/minhkhoidao'
        />
        <HobbyItem icon='@khoidaoo' link='anywhere else.' isStyle />
      </ul>
    </div>
  );
};

export default OnlinePresence;
