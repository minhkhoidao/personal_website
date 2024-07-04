import Heading from '@/components/Heading';
import HobbyItem from '@/components/HobbyItem';

const More = () => {
  return (
    <div className='flex flex-col mt-2'>
      <Heading title='More' />
      <ul className='list-hobby ml-6'>
        <HobbyItem icon='🔗' link='links' />
        <HobbyItem icon='🖥️' link='soft & hardware used' />
        <HobbyItem icon='🎮' link='games played' />
        <HobbyItem icon='💴' link='anime watched' />
        <HobbyItem icon='🎬' link='series seen' />
      </ul>
    </div>
  );
};

export default More;
