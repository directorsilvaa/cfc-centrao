"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = ["Início", "Sobre Nós", "Serviços"];

  return (
    <div className="w-full bg-white shadow-md dark:bg-gray-900">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 md:p-0 lg:p-0 mx-auto lg:mx-36 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-red-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo-sem-fundo.svg"
                        alt="N"
                        width="100"
                        height="100"
                        className="w-[250px]"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#F6C522] focus:text-red-500 focus:bg-red-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-[#F6C522] rounded-md lg:ml-5"
                    >
                      Entre em contato
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        {/* Menu Desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex items-center space-x-6">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase()}`} legacyBehavior>
                  <a className="text-gray-500 hover:bg-opacity-30 dark:text-gray-300 hover:bg-[#F6C522] px-4 py-2 rounded hover:text-gray-500 focus:text-grey-500">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contato" legacyBehavior>
            <a className="px-6 py-2 text-white bg-[#F6C522] rounded-md">
              Entre em contato
            </a>
          </Link>
          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
};
