import { useEffect } from 'react';
import useAudioStore, { PlayState } from '../../services/audio/audioStore';
import { MiniPlayer } from '../players';

export function Footer() {
  const playState = useAudioStore((state) => state.playState);
  useEffect(() => {
    console.log('Footer', 'FOOTER', playState);
  }, []);

  useEffect(() => {
    return () => {
      console.log('Footer', 'UsePlayState', _displayPlayState());
    };
  }, [playState]);

  const _displayPlayState = () => {
    if (playState === PlayState.playing) {
      return <h1>Playing</h1>;
    }
    if (playState === PlayState.paused) {
      return <h1>Paused</h1>;
    }
    if (playState === PlayState.stopped) {
      return <h1>Stopped</h1>;
    }
  };

  return (
    <footer>
      {_displayPlayState()}
      {playState === PlayState.stopped ? <></> : <MiniPlayer />}
    </footer>
  );
}

export default Footer;
