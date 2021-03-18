import React from 'react';
import audioStore, {
  audioDuration,
  audioPosition,
  positionPercentage,
  PlayState,
} from '../../store/audioStore';
import { useRecoilState, useRecoilValue } from 'recoil';

export function Footer() {
  const position = useRecoilValue(audioPosition);
  const duration = useRecoilValue(audioDuration);
  const posPerc = useRecoilValue(positionPercentage);
  const [audioState, setAudioState] = useRecoilState(audioStore);

  const handleTimeClick = (e) => {
    console.log('Footer', 'handleTimeClick', e);
    const timeClicked = calcClickedTime(e);
    console.log('Footer', 'calcClickedTime', timeClicked);
    const newAudioState = {
      ...audioState,
      ...{
        audioPosition: timeClicked,
      },
    };
    setAudioState(newAudioState);
  };

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const barStart = e.target.getBoundingClientRect().left + window.scrollX;
    const barWidth = e.target.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = ((audioState.audioDuration ?? 0) as number) / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  return (
    <footer className="h-11 p-0">
      <div className="flex justify-items-stretch h-full p-2 ">
        <div className="w-8 cursor-pointer stroke-1">
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
        </div>
        <div className="flex items-center w-full pl-2">
          <div className="elapsed text-sm text-gray-400">{position}</div>
          <div
            className="progress ml-4 w-full"
            onMouseDown={(e) => handleTimeClick(e)}
          >
            <div className="mt-0 px-2">
              <div className="h-1 bg-purple-100 rounded-full">
                <div
                  className="h-1 bg-purple-400 rounded-full relative"
                  style={{ width: `${posPerc}%` }}
                >
                  <span className="w-4 h-4 bg-indigo-600 absolute right-0 bottom-0 -mb-1.5 rounded-full shadow"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="total text-sm text-gray-400">{duration}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
