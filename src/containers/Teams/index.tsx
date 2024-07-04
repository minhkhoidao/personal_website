import React from 'react';

const Teams = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4'>
      <div className='flex flex-row items-center'>
        <div className='bg-yellow p-[3px] w-fit rounded-ss-[5px] rounded-se-[5px]'>
          Speaker
        </div>
        <div className='bg-orange p-[3px] text-base font-bold w-fit rounded-se-[5px] rounded-ee-[5px]'>
          AI Core Team
        </div>
      </div>
      <p className='text-base text-text'>Proud member of AI Core Team</p>
    </div>
  );
};

export default Teams;
