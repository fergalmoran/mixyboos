import React from 'react';
import Videojs from 'video.js';
const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
    },
  ],
};
const LivePage = () => {
  return (
    <React.Fragment>
      <Videojs {...videoJsOptions} />
    </React.Fragment>
  );
};

export default LivePage;
