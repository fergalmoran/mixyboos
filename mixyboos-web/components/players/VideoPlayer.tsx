import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export default class VideoPlayer extends React.Component {
  player: any;
  videoNode: any;
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player className="pr-10">
        <video
          ref={(node) => (this.videoNode = node)}
          className="video-js"
        ></video>
      </div>
    );
  }
}
