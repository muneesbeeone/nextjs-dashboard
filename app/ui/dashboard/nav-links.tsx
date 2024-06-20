'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
export default function NavLinks() {
  const pathName = usePathname();
  const activeClass = 'bg-[#F2F6FF] text-[#17264F] border-gray-100';
  const inactiveClass = 'border-gray-900 text-gray-200 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100';
  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Requests',
      href: '/dashboard/requests',
      icon: DocumentDuplicateIcon,
    },
    // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  ];
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center px-6 gap-3 py-2 mt-4 duration-200 m-3 rounded-md',
              {
                [activeClass]: pathName === link.href,
                [inactiveClass]: pathName !== link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
