import { RssIcon } from '@/icons';
import Link from 'next/link';
import CustomLink from '../Link';

const Footer = () => {
  return (
    <footer>
      <hr className='border border-accent border-dashed my-2' />

      <div className='flex flex-row items-center flex-wrap justify-between'>
        <div className='flex flex-col'>
          <p className='text-base text-text'>Content © 2019-2024 Speyll.</p>
          <p className='text-base text-text'>
            Theme and color theme licensed under{' '}
            <CustomLink href='https://en.wikipedia.org/wiki/Licence_MIT'>
              MIT
            </CustomLink>
            .
          </p>
          <p className='text-base text-text'>
            Built with{' '}
            <CustomLink href={'https://nextjs.org/'} target='_blank'>
              Nextjs
            </CustomLink>
            ,{' '}
            <CustomLink href={'https://tailwindcss.com/'} target='_blank'>
              tailwindcss
            </CustomLink>
          </p>
        </div>
        <Link href='#'>
          <RssIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
