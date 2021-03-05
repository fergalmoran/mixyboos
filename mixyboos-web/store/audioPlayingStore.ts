import { atom } from 'recoil';
interface IAudioPlayingStore {
    isPlayingAndPaused: boolean;
    audioId?: string;
    audioTitle?: string;
    audioUrl?: string;
    audioLength?: number;
    audioPosition?: number;
}

const audioPlayingStore = atom<IAudioPlayingStore>({
    key: 'audioState',
    default: {
        isPlayingAndPaused: false,
    },
});

export default audioPlayingStore;
