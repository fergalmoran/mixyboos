import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';

const TopNavbar = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  const [navbarOpen, setNavbarOpen] = React.useState(true);
  return (
    <React.Fragment>
      <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
        {/* top bar left */}
        <ul className="flex items-center">
          {/* add button */}
          <li className="h-8 w-8">
            <svg
              className="text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </li>
        </ul>
        <ul className="flex items-center">
          {/* add button */}
          <li>
            <h1 className="pl-8 lg:pl-0 text-gray-700">Mixy::Boos</h1>
          </li>
        </ul>
        {/* to bar right  */}
        <ul className="flex items-center">
          <li className="pr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </li>
          <li className="h-10 w-10">
            <img
              className="h-full w-full rounded-full mx-auto"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile woman"
            />
          </li>
        </ul>
      </nav>
    </React.Fragment>
    // <>
    //     <nav
    //         className={`${
    //             session ? 'bg-indigo-500' : ''
    //         } top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`}
    //     >
    //         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    //             <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //                 <Link href="/">
    //                     <a
    //                         className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
    //                         href="/"
    //                     >
    //                         Mixy::Boos
    //                     </a>
    //                 </Link>
    //                 <button
    //                     className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //                     type="button"
    //                     onClick={() => setNavbarOpen(!navbarOpen)}
    //                 >
    //                     <i className="text-white fas fa-bars"></i>
    //                 </button>
    //             </div>
    //             <div
    //                 className={
    //                     'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
    //                     (navbarOpen
    //                         ? ' block rounded shadow-lg'
    //                         : ' hidden')
    //                 }
    //                 id="example-navbar-warning"
    //             >
    //                 <ul className="flex flex-col lg:flex-row list-none mr-auto">
    //                     <li className="flex items-center">
    //                         <Link
    //                             href={
    //                                 session ? '/mix/upload' : '/login'
    //                             }
    //                         >
    //                             <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
    //                                 <i className="text-yellow-100 fas fa-cloud-upload-alt text-lg leading-lg mr-2" />{' '}
    //                                 Upload
    //                             </a>
    //                         </Link>
    //                         <Link href={session ? '/live' : '/login'}>
    //                             <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
    //                                 <i className="animate-ping text-yellow-100 fas fa-microphone  mr-2" />{' '}
    //                                 Go Live!
    //                             </a>
    //                         </Link>
    //                     </li>
    //                 </ul>
    //                 <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //                     <li className="flex items-center">
    //                         <a
    //                             className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //                             href="https://www.facebook.com/mixyboos"
    //                             target="_blank"
    //                         >
    //                             <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg " />
    //                             <span className="lg:hidden inline-block ml-2">
    //                                 Facebook
    //                             </span>
    //                         </a>
    //                     </li>

    //                     <li className="flex items-center">
    //                         <a
    //                             className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //                             href="https://twitter.com/mixyboos"
    //                             target="_blank"
    //                         >
    //                             <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg " />
    //                             <span className="lg:hidden inline-block ml-2">
    //                                 Twitter
    //                             </span>
    //                         </a>
    //                     </li>

    //                     <li className="flex items-center">
    //                         <a
    //                             className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    //                             href="https://github.com/fergalmoran/mixyboos"
    //                             target="_blank"
    //                         >
    //                             <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg " />
    //                             <span className="lg:hidden inline-block ml-2">
    //                                 Star
    //                             </span>
    //                         </a>
    //                     </li>

    //                     <li className="flex items-center">
    //                         {session ? (
    //                             <Link href="#">
    //                                 <a
    //                                     className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
    //                                     type="button"
    //                                     onClick={async () => {
    //                                         await signOut();
    //                                         router.push('/');
    //                                     }}
    //                                 >
    //                                     <i className="fas fa-sign-out-alt"></i>
    //                                     Logout
    //                                 </a>
    //                             </Link>
    //                         ) : (
    //                             <Link href="#">
    //                                 <a
    //                                     className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
    //                                     onClick={() => signIn()}
    //                                     type="button"
    //                                 >
    //                                     <i className="fas fa-arrow-alt-circle-down"></i>{' '}
    //                                     Login/Join
    //                                 </a>
    //                             </Link>
    //                         )}
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // </>
  );
};
export default TopNavbar;
