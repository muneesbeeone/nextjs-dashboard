import React, { useEffect, useRef } from 'react';
import NavLinks from './nav-links';
import Image from 'next/image';

interface SideNavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div className='flex'>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-30 w-72 overflow-y-auto transition duration-300 transform bg-[#14244B]
          ${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}
          lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center flex-col">
            <Image width={115} height={44} className="w-[115px] h-[44px]" src="/logo.svg" alt="Logo" />
          </div>
        </div>
        <nav className="mt-10">
          <NavLinks />
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
