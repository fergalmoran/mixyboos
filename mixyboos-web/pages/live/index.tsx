import React, { useRef } from 'react';
import { ChatBox } from '../../components/chat';
import { VideoPlayer } from '../../components/players';

const LivePage = () => {
  const playerRef = useRef();
  return (
    <div className="px-44 h-full">
      <div className="flex flex-row h-full">
        <div className="w-2/3 mx-5">
          <div className="flex flex-col">
            <div id="video-wrapper">
              <VideoPlayer
                playerRef={playerRef}
                src="http://localhost:9200/hls/hellosailor.m3u8"
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
              />
            </div>
            <div id="show-info" className="p-2 border-b-2 border-blue-500">
              <div className="flex flex-row justify-between">
                <span className="text-gray-500 text-2xl font-light">
                  Live show
                </span>
                <div id="tools" className="flex flex-row space-x-2">
                  <div id="viewers">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-block"
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
                    <span className="mr-1 mb-5 text-mixyboos text-sm">500</span>
                  </div>
                  <div id="share">
                    <button className="text-indigo-400 outline-none focus:outline-none select-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="{2}"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        ></path>
                      </svg>
                      <span className="mr-1 ">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-gray-100 ">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default LivePage;
