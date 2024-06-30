import { LightIcon } from '@/icons';
import CustomLink from '../Link';

const Header = () => {
  return (
    <header>
      <nav
        id='nav-bar'
        className='flex flex-row pt-[10px] justify-end gap-1 items-center'
      >
        <CustomLink href='#'>/home/</CustomLink>
        <CustomLink href='#'>/about/</CustomLink>
        <CustomLink href='#'>/journal/</CustomLink>
        <CustomLink href='#'>/blog/</CustomLink>
        <LightIcon />
      </nav>
    </header>
  );
};

export default Header;
