import React from 'react';
import Link from 'next/link';

const CustomLink = ({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) => (
  <Link
    href={href}
    target={target}
    className='text-link text-base hover:bg-link hover:text-bg'
  >
    {children}
  </Link>
);

export default CustomLink;
