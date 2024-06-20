"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [title, setTitle] = useState('Dashboard');
  const router = usePathname();

  const updateTitle = () => {
    switch (router) {
      case '/cards':
        setTitle('Cards');
        break;
      case '/dashboard/requests':
        setTitle('My Requests');
        break;
      default:
        setTitle('Dashboard');
        break;
    }
  };

  useEffect(() => {
    updateTitle();
  }, [router]);

  return (
    <header className={`flex items-center justify-between px-6 ${title !== 'Dashboard' ? 'py-12 bg-white' : 'py-12'}`}>
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="relative mx-4 lg:mx-0">
          <h3 className="text-3xl font-medium text-[#17264F]">{title}</h3>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          >
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Your avatar"
            />
          </button>
          {dropdownOpen && <div className="fixed inset-0 z-10 w-full h-full" onClick={() => setDropdownOpen(false)}></div>}
          {dropdownOpen && (
            <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                Profile
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                Settings
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                Logout
              </Link>
            </div>
          )}
        </div>
        <div className="leading-none">
          <span className="text-md">Jane Doe</span>
          <p className="text-xs text-gray-500">Emp 123</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
