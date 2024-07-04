import { RssIcon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from '../Link';

async function fetchImages() {
  try {
    const response = await fetch('https://speyllsite.pages.dev/moe.json', {
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.urls.length);
    const randomUrl = data.urls[randomIndex];
    return randomUrl;
  } catch (error) {
    console.error('Error fetching URLs:', error);
  }
}

export default async function Footer() {
  const image = await fetchImages();

  return (
    <footer>
      <hr className='border border-accent border-dashed my-2' />
      <div className='flex flex-row items-center flex-wrap justify-between'>
        <div className='flex flex-col'>
          <p className='text-base text-text'>
            Content © 2024-present Khoidaoo.
          </p>
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
      <Image
        alt='moe is loading..'
        className='moe no-style'
        id='target'
        loading='lazy'
        width={180}
        height={139}
        src={image}
        unoptimized
      />
    </footer>
  );
}
