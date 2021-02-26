import React from 'react';
import Image from 'next/image';
import { Mix } from '../../src/types/Mix';

const MixListItem = (props: { mix: any }) => {
  return (
    <div
      className="text-gray-800 p-4 w-full border-gray-700
    shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <img
              className="h-6 w-6 rounded-full border-g"
              src={props.mix.user.image}
              alt="Mix"
            />
          </div>
          <div className="text-gray-600 px-2">
            <span className="font-bold">Fergal Moran</span>
            <span className="text-gray-400"> listened</span>
          </div>
        </div>
        <div className="text-gray-400">1 hour ago</div>
      </div>
      <div className="flex py-4">
        <div className="">
          <img
            className="rounded-md border border-gray-300 w-40"
            src={props.mix.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between px-4 w-full">
          <div className="flex">
            <div className="w-20">
              <svg
                className="text-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-between px-4">
              <div className="pt-2 font-semibold">{props.mix.title}</div>
              <div className="text-gray-500 text-xs pb-4">
                by {props.mix.user.name}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="flex cursor-pointer">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                6
              </div>
              <div className="flex cursor-pointer">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />{' '}
                </svg>
                1
              </div>
              <div className="flex cursor-pointer">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />{' '}
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex  cursor-pointer">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-xs -mt-1 text-purple-400 pl-0.5">123</div>
              </div>
              <div className="text-gray-400">
                <a href="/">#house</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex space-x-4 p-6">
    //   <div id="image" className="min-w-max">
    //     <img
    //       className="w-48"
    //       src={`${props.mix.image}?r=${props.mix.id}`}
    //       alt={props.mix.title}
    //     />
    //   </div>
    //   <div className="flex flex-col overflow-hidden w-full">
    //     <div
    //       id="title"
    //       className="
    //             text-2xl leading-2 font-medium
    //           text-gray-500 tracking-wide border-b-2"
    //     >
    //       {props.mix.title}
    //     </div>
    //     {/* <div>
    //       <div className="mx-8 py-4">
    //         <div className="flex justify-between text-sm text-gray-400">
    //           <p>0:40</p>
    //           <p>4:20</p>
    //         </div>
    //         <div className="mt-1">
    //           <div className="h-1 bg-gray-500 rounded-full">
    //             <div className="w-1/5 h-1 bg-red-500 rounded-full relative">
    //               <span className="w-4 h-4 bg-red-200 absolute right-0 bottom-0 -mb-1 rounded-full shadow" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default MixListItem;
