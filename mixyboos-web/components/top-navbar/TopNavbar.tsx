import React from 'react';
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-gray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              Mixy::Boos
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.facebook.com/mixyboos"
                target="_blank"
              >
                <i className="text-gray-400 fab fa-facebook text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://twitter.com/mixyboos"
                target="_blank"
              >
                <i className="text-gray-400 fab fa-twitter text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>
            <li className="flex items-center">
              <Link href="/login">
                <a
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase
                px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none
                lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  <i className="fa fa-sign-in-alt mr-2"></i>
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <React.Fragment>
    //   <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
    //     {/* top bar left */}
    //     <ul className="flex items-center">
    //       {/* add button */}
    //       <li className="h-8 w-8">
    //         <svg
    //           className="text-red-600"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    //           />
    //         </svg>
    //       </li>
    //     </ul>
    //     <ul className="flex items-center">
    //       {/* add button */}
    //       <li>
    //         <h1 className="pl-8 lg:pl-0 text-gray-700">Mixy::Boos</h1>
    //       </li>
    //     </ul>
    //     {/* to bar right  */}
    //     <ul className="flex items-center">
    //       <li>
    //         <Link href="/login">
    //           <a className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             Login
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </React.Fragment>
  );
};
export default TopNavbar;
