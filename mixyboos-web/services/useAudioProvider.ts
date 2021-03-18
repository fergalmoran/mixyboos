import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useRecoilState } from 'recoil';
import { audioStore } from '../store';
import { PlayState, audioPosition } from '../store/audioStore';

const useAudioProvider = () => {
    const [duration, setDuration] = useState<number>(0);
    const [curTime, setCurTime] = useState<number>(0);
    const [playingId, setPlayingId] = useState<string>();
    const audioRef: MutableRefObject<HTMLAudioElement> = useRef(
        typeof Audio !== 'undefined' && new Audio()
    );
    const [audioState, setAudioState] = useRecoilState(audioStore);

    const loadedListener = (e) => {
        setAudioState({
            ...audioState,
            ...{
                audioDuration: audioRef.current.duration,
            },
        });
    };
    const progressListener = (e) => {
        //only update every second...
        if (audioState.audioPosition <= audioRef.current.currentTime + 1000) {
            setAudioState({
                ...audioState,
                ...{
                    audioPosition: audioRef.current.currentTime,
                },
            });
        }
    };

    useEffect(() => {
        console.log('useAudioProvider', 'useEffect_curTime', curTime);
        if (audioState.audioPosition) {
            audioRef.current.currentTime = audioState.audioPosition;
        }
    }, [curTime]);

    useEffect(() => {
        console.log('useAudioProvider', 'useEffect_playingId', playingId);
        if (!playingId) return;
        audioRef.current.volume = 0.1;
        // audio.src = playingId;
        audioRef.current.src =
            'https://cdn.podnoms.com/audio/cc67db23-3e03-4c52-d764-08d8dc427db2.mp3';
        audioRef.current.play();
        setAudioState({
            ...audioState,
            ...{
                playState: PlayState.playing,
            },
        });
        audioRef.current.addEventListener('loadeddata', loadedListener);
        audioRef.current.addEventListener('timeupdate', progressListener);
        return () => {
            audioRef.current.removeEventListener('loadeddata', loadedListener);
            audioRef.current.removeEventListener(
                'timeupdate',
                progressListener
            );
        };
    }, [audioState.audioId]);

    return {
        curTime,
        setCurTime,
        duration,
        playingId,
        setPlayingId,
    };
};

export default useAudioProvider;
