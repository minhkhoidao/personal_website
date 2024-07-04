import Heading from '@/components/Heading';
import React from 'react';

const LastestStatus = () => {
  return (
    <div className='flex flex-col mt-3 gap-2'>
      <Heading title='Latest status' />
      <div id='statuscafe' className='flex flex-col '>
        <span className='text-base text-text'>smoky 🎮 115 days ago</span>
        <blockquote id='statuscafe-content'>
          hyped for the elden ring dlc
        </blockquote>
      </div>
    </div>
  );
};

export default LastestStatus;
