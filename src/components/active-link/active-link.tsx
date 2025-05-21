'use client'

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const linkHref = href.toString();

  let isCurrentPath = false;

  // Special handling for the root path "/"
  if (linkHref === '/') {
    isCurrentPath = pathname === '/';
  } else {
    // For other paths, check if the pathname starts with the link's href
    // and ensure it's either an exact match or followed by a slash
    isCurrentPath = pathname.startsWith(linkHref) &&
      (pathname.length === linkHref.length || pathname.charAt(linkHref.length) === '/');
  }


  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
};