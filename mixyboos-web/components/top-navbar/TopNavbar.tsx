import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const TopNavbar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div id="left-nav">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
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
        </div>
        <div id="center-nav">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {user && (
              <li className="flex items-center">
                <Link href="/live">
                  <a
                    className="bg-red-400 text-white active:bg-blue-600 text-xs font-bold uppercase
                px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none
                ease-linear transition-all duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-3 h-3 mr-1 mb-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                    Go Live
                  </a>
                </Link>
              </li>
            )}
            {user && (
              <li className="flex items-center">
                <Link href="/mix/upload">
                  <a
                    className="bg-indigo-400 text-white active:bg-blue-600 text-xs font-bold uppercase
                px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none
                lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  >
                    <svg
                      className="inline-block w-3 h-3 mr-1 mb-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    Upload
                  </a>
                </Link>
              </li>
            )}{' '}
            <li className="flex items-center">
              <Link href="/discover">
                <a
                  className="bg-mixyboos text-white active:bg-blue-600 text-xs font-bold uppercase
                px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none
                lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  <svg
                    className="inline-block w-3 h-3 mr-1 mb-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Discover
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div id="right-nav">
          <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden">
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
                {user ? (
                  <Link href="/api/auth/logout">
                    <a
                      className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase
                px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none
                lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    >
                      <i className="fa fa-sign-out-alt mr-2"></i>
                      Logout
                    </a>
                  </Link>
                ) : (
                  <Link href="/api/auth/login">
                    <a
                      className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase
                px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none
                lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    >
                      <i className="fa fa-sign-in-alt mr-2"></i>
                      Login
                    </a>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
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

        <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden">
          HELLO SAILOR
        </div>


      </div> */}
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
