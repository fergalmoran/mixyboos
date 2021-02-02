import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../services/auth/auth';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';

const TopNavbar = () => {
    const router = useRouter();
    const { user } = useAuth();

    const [navbarOpen, setNavbarOpen] = React.useState(true);
    return (
        <>
            <nav
                className={`${
                    user ? 'bg-indigo-500' : ''
                } top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`}
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                                href="#pablo"
                            >
                                Mixy::Boos
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                            (navbarOpen
                                ? ' block rounded shadow-lg'
                                : ' hidden')
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <Link href={user ? '/mix/upload' : '/login'}>
                                    <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                        <i className="text-yellow-100 fas fa-cloud-upload-alt text-lg leading-lg mr-2" />{' '}
                                        Upload
                                    </a>
                                </Link>
                                <Link href={user ? '/live' : '/login'}>
                                    <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                        <i className="animate-ping text-yellow-100 fas fa-microphone  mr-2" />{' '}
                                        Go Live!
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://www.facebook.com/mixyboos"
                                    target="_blank"
                                >
                                    <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">
                                        Facebook
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://twitter.com/mixyboos"
                                    target="_blank"
                                >
                                    <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">
                                        Twitter
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://github.com/fergalmoran/mixyboos"
                                    target="_blank"
                                >
                                    <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">
                                        Star
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                {user ? (
                                    <Link href="#">
                                        <a
                                            className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={async () => {
                                                await firebase.auth().signOut();
                                                router.push('/');
                                            }}
                                        >
                                            <i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </a>
                                    </Link>
                                ) : (
                                    <Link href="/login">
                                        <a
                                            className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <i className="fas fa-arrow-alt-circle-down"></i>{' '}
                                            Login/Join
                                        </a>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default TopNavbar;
