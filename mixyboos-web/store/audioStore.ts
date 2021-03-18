import { atom, selector } from 'recoil';

const toHHMMSS = (seconds: number) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

enum PlayState {
    stopped,
    playing,
    paused,
}
interface IAudioStore {
    playState: PlayState;
    audioId?: string;
    audioTitle?: string;
    audioUrl?: string;
    audioDuration?: number;
    audioPosition?: number;
}

const audioStore = atom<IAudioStore>({
    key: '__audioState__store',
    default: {
        playState: PlayState.stopped,
    },
});

const audioPosition = selector({
    key: 'audioPositionSelector',
    get: ({ get }) => toHHMMSS(get(audioStore).audioPosition ?? 0),
});
const audioDuration = selector({
    key: 'audioDurationSelector',
    get: ({ get }) => toHHMMSS(get(audioStore).audioDuration ?? 0),
});
const positionPercentage = selector<Number>({
    key: 'positionPercentage',
    get: ({ get }) => {
        const store = get(audioStore);
        return (store.audioPosition / store.audioDuration) * 100;
    },
});
export { PlayState, audioPosition, audioDuration, positionPercentage };
export default audioStore;
