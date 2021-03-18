import { atom } from 'recoil';

enum PlayState {
    stopped,
    playing,
    paused,
}
interface IAudioPlayingStore {
    playState: PlayState;
    audioId?: string;
    audioTitle?: string;
    audioUrl?: string;
    audioDuration?: number;
    audioPosition?: number;
    audioPositionFormatted?: string;
}

const audioPlayingStore = atom<IAudioPlayingStore>({
    key: 'audioState',
    default: {
        playState: PlayState.stopped,
    },
});

export { PlayState };
export default audioPlayingStore;
