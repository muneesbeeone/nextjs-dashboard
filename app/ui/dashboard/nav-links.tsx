import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Import custom SVG icon
import DasboardIcon from './ICONS/dashboard-icon';
import RequestIcon from './ICONS/request-icon';

export default function NavLinks() {
  const pathName = usePathname();
  const activeClass = 'bg-[#F2F6FF] text-[#17264F] border-gray-100';
  const inactiveClass = 'border-gray-900 text-gray-200 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100';
  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: DasboardIcon },
    { name: 'Requests', href: '/dashboard/requests', icon: RequestIcon },
    // Optionally add more links here
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            passHref
            className={clsx(
              'flex items-center px-6 gap-3 py-2 mt-4 duration-200 m-3 rounded-md',
              {
                [activeClass]: pathName === link.href,
                [inactiveClass]: pathName !== link.href,
              }
            )}
          >
            <LinkIcon className="w-6 h-6 text-gray-500" /> {/* Adjust size and color as needed */}
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
