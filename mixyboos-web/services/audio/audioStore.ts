import create, { State } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AudioState extends State {
    id: string;
    url: string;
    position: number;
    seekPosition: number;
    duration: number;
    setNowPlaying: (id: string, url: string) => void;
    setPosition: (position: number) => void;
    setDuration: (duration: number) => void;
    setSeekPosition: (duration: number) => void;
}

const useAudioStore = create<AudioState>(
    devtools((set) => ({
        id: '',
        url: '',
        position: -1,
        seekPosition: -1,
        duration: -1,
        setPosition: (position: number) => set((state) => ({ position })),
        setSeekPosition: (seekPosition: number) =>
            set((state) => ({ seekPosition })),
        setDuration: (duration: number) => set((state) => ({ duration })),
        setNowPlaying: (id: string, url: string) =>
            set((state) => ({ id, url })),
    }))
);

export default useAudioStore;
