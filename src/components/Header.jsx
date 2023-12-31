import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
     <header className="bg-white rounded-xl shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">OneCrew</span>
            <img className="h-9 w-auto" src="https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/OneCrewLogobl-min.png?alt=media&token=3837d583-8206-48c2-ac89-83edd977900c" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <li className="no-bullet">
            <Link
              to="home"
              smooth={true}
                className="px-8 py-4 rounded-xl text-base font-semibold leading-7 text-black cursor-pointer hover:bg-black hover:text-white transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li  className="no-bullet">
            <Link
              to="features"
              smooth={true}
                className="px-8 py-4 rounded-xl text-base font-semibold leading-7 text-black cursor-pointer hover:bg-black hover:text-white transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li  className="no-bullet">
           <Link
              to="Pros"
              smooth={true}
                className="px-8 py-4 rounded-xl text-base font-semibold leading-7 text-black cursor-pointer hover:bg-black hover:text-white transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technologies
            </Link>
          </li>
           <li  className="no-bullet">
           <Link
              to="section4"
              smooth={true}
                              className="px-8 py-4 rounded-xl text-base font-semibold leading-7 text-black cursor-pointer hover:bg-black hover:text-white transition duration-300"

              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us!
            </Link>
          </li>
          <li  className="no-bullet">
           <Link
              to="section3"
              smooth={true}
                              className="px-8 py-4 rounded-xl text-base font-semibold leading-7 text-black cursor-pointer hover:bg-black hover:text-white transition duration-300"

              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </li>
         
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://api.whatsapp.com/send?phone=923120043671" className="text-sm px-8 py-4 rounded-xl font-semibold leading-6 text-black cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 ">
            Get a Qoute <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
  <div className="flex items-center justify-between">
    <Link to="home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
      <span className="sr-only">OneCrew Technologies</span>
      <img
        className="h-8 w-auto"
        src="https://firebasestorage.googleapis.com/v0/b/onecrewtechs.appspot.com/o/OneCrewLogobl-min.png?alt=media&token=3837d583-8206-48c2-ac89-83edd977900c"
        alt=""
      />
    </Link>
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(false)}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  <div className="mt-6 flow-root">
    <div className="-my-6 divide-y divide-gray-500/10">
      <div className="space-y-2 py-6">
        <Link
          to="home"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(false)} // Close menu on click
        >
          Home
        </Link>
        <Link
          to="features"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(false)} // Close menu on click
        >
          Services
        </Link>
        <Link 
          to="skill"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(false)} // Close menu on click
        >
          Technologies
        </Link>
        <Link
          to="Pros"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(false)} // Close menu on click
        >
          Why us!
        </Link>
        <Link
          to="section3"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(false)} // Close menu on click
        >
          Careers
        </Link>
      </div>
    </div>
  </div>
</Dialog.Panel>
      </Dialog>
    </header>
  );
}
