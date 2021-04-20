import { Howl } from 'howler';
import React, { useEffect, useRef } from 'react';
import useAudioStore from './audioStore';

export interface IAudioProviderProps {
  children: React.ReactNode;
}

const AudioProvider: React.FC<IAudioProviderProps> = ({ children }) => {
  const player = useRef<Howl>();

  const url = useAudioStore((state) => state.url);
  const setPosition = useAudioStore((state) => state.setPosition);
  const setDuration = useAudioStore((state) => state.setDuration);
  const seekPosition = useAudioStore((state) => state.seekPosition);

  const progressTimer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    console.log('AudioProvider', 'idEffect', url);
    if (player.current) {
      player.current.stop();
    }
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
    }
    if (url) {
      player.current = _createPlayer(url);
      player.current.play();
    }
    progressTimer.current = setInterval(() => {
      setPosition((player.current?.seek() || 0) as number);
    }, 100);
  }, [url]);

  useEffect(() => {
    console.log('AudioProvider', 'useEffect_position', seekPosition);
    player.current?.seek(seekPosition);
  }, [seekPosition]);

  const _createPlayer = (src: string) => {
    const howl = new Howl({
      src: src,
      autoplay: true,
      html5: true,
      volume: 1,
    });
    howl.on('load', () => setDuration(howl.duration()));
    return howl;
  };

  return <React.Fragment>{children}</React.Fragment>;
};

export default AudioProvider;
