import React from 'react';
import { ChatBox } from '../../components/chat';
import { VideoPlayer } from '../../components/players';
const videoJsOptions = {
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  fill: true,
  controls: true,
  sources: [
    {
      src: 'http://localhost:8080/hls/hellosailor.m3u8',
      type: 'application/vnd.apple.mpegurl',
    },
  ],
};
const LivePage = () => {
  return (
    <div className="px-44">
      <div className="flex flex-row">
        <div className="flex h-1/2 w-3/4">
          <VideoPlayer {...videoJsOptions} />
        </div>
        <div className="flex  w-1/4">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default LivePage;
