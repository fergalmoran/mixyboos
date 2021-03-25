import React, { useRef } from 'react';
import { useAudioPlayer, useAudioPosition } from '../../services/audio';
import toHHMMSS from '../../services/utils/formatTime';

export function Footer() {
  const seekBarElem = useRef<HTMLDivElement>(null);
  const { position, duration, seek, percentComplete } = useAudioPosition({
    highRefreshRate: false,
  });
  const { togglePlayPause, playing, ready } = useAudioPlayer();
  const _handleTimeClick = ($event) => {
    console.log('Footer', $event);
    const { pageX: eventOffsetX } = $event;

    if (seekBarElem.current) {
      const elementOffsetX = seekBarElem.current.offsetLeft;
      const elementWidth = seekBarElem.current.clientWidth;
      const percent = (eventOffsetX - elementOffsetX) / elementWidth;
      seek(percent * duration);
    }
  };

  return (
    <footer className="h-11 p-0">
      <div className="flex justify-items-stretch h-full p-2 ">
        <div className="w-8 cursor-pointer stroke-1" onClick={togglePlayPause}>
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
        <div className="flex items-center w-full pl-2">
          <div className="elapsed text-sm text-gray-400">
            {toHHMMSS(position)}
          </div>
          <div
            className="progress ml-4 w-full"
            ref={seekBarElem}
            onMouseDown={_handleTimeClick}
          >
            <div className="mt-0 px-2">
              <div className="h-1 bg-purple-100 rounded-full">
                <div
                  className="h-1 bg-purple-400 rounded-full relative"
                  style={{ width: `${percentComplete}%` }}
                >
                  <span className="w-4 h-4 bg-indigo-600 absolute right-0 bottom-0 -mb-1.5 rounded-full shadow"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="total text-sm text-gray-400">
            {toHHMMSS(duration)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
