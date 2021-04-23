import { useEffect } from 'react';
import useAudioStore, { PlayState } from '../../services/audio/audioStore';
import { MiniPlayer } from '../players';

export function Footer() {
  const playState = useAudioStore((state) => state.playState);
  return (
    <footer>{playState === PlayState.stopped ? <></> : <MiniPlayer />}</footer>
  );
}

export default Footer;
