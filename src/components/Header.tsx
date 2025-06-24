import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Example for component-specific CSS
import { NavLink } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import UserLogo from '../assets/User.png'

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/exp' },
]
interface NavigationItem {
    name: string;
    href: string;
}

const Header: React.FC = () => {
  return (
    // <header className="app-header">
    //   <nav>
    //     <Link to="/" className="site-logo">[Your Name/Logo]</Link>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/projects">Projects</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    //   </nav>
    // </header>
    <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src={UserLogo}
                                className="h-8 w-auto"
                            />

                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `text-gray-300 rounded-md px-3 py-2 text-lg font-medium text-weight-700 ${isActive ? 'bg-gray-800' : ''}`
                                        }

                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={NavLink}
                            to={item.href}
                            className={({ isActive }: { isActive: boolean }) =>
                                `block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`
                            }
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>

        </Disclosure>
  );
};
export default Header;