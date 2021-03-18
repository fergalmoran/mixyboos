import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useRecoilState } from 'recoil';
import { audioStore } from '../store';
import { PlayState } from '../store/audioStore';

const useAudioProvider = () => {
    const [duration, setDuration] = useState<number>(0);
    const [curTime, setCurTime] = useState<number>(0);
    const [playingId, setPlayingId] = useState<string>();
    const audioRef: MutableRefObject<HTMLAudioElement> = useRef(
        typeof Audio !== 'undefined' && new Audio()
    );
    const [audioState, setAudioState] = useRecoilState(audioStore);

    useEffect(() => {
        if (audioState.audioPosition) {
            console.log(
                'useAudioProvider',
                'audioPosition',
                audioState.audioPosition
            );
            console.log('useAudioProvider', 'curTime', curTime);
            audioRef.current.currentTime = audioState.audioPosition;
        }
    }, [curTime]);

    useEffect(() => {
        if (!playingId) return;
        console.log('useAudioProvider', 'playingId', playingId);
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
        audioRef.current.addEventListener('loadeddata', () => {
            setAudioState({
                ...audioState,
                ...{
                    audioDuration: audioRef.current.duration,
                },
            });
        });
        audioRef.current.addEventListener('timeupdate', () => {
            setAudioState({
                ...audioState,
                ...{
                    audioPosition: audioRef.current.currentTime,
                },
            });
        });
    }, [playingId]);
    // useEffect(() => {
    //     if (playingId) {
    //         audioRef.current.volume = 0.1;
    //         // audio.src = playingId;
    //         audioRef.current.src =
    //             'https://cdn.podnoms.com/audio/cc67db23-3e03-4c52-d764-08d8dc427db2.mp3';
    //         const setAudioData = () => {
    //             const newAudioState = {
    //                 ...audioState,
    //                 ...{
    //                     playState: PlayState.playing,
    //                     audioDuration: audioRef.current.duration,
    //                     audioPosition: audioRef.current.currentTime,
    //                 },
    //             };
    //             setAudioState(newAudioState);
    //             setCurTime(audioRef.current.currentTime);
    //         };

    //         const setAudioTime = () => {
    //             const newAudioState = {
    //                 ...audioState,
    //                 ...{
    //                     audioPosition: audioRef.current.currentTime,
    //                 },
    //             };
    //             setAudioState(newAudioState);
    //             setDuration(audioRef.current.duration);
    //             setCurTime(audioRef.current.currentTime);
    //         };

    //         // DOM listeners: update React state on DOM events
    //         audioRef.current.addEventListener('loadeddata', setAudioData);
    //         audioRef.current.addEventListener('timeupdate', setAudioTime);

    //         // React state listeners: update DOM on React state changes
    //         playingId ? audioRef.current.play() : audioRef.current.pause();

    //         // effect cleanup
    //         return () => {
    //             audioRef.current.removeEventListener(
    //                 'loadeddata',
    //                 setAudioData
    //             );
    //             audioRef.current.removeEventListener(
    //                 'timeupdate',
    //                 setAudioTime
    //             );
    //         };
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [playingId]);

    return {
        curTime,
        setCurTime,
        duration,
        playingId,
        setPlayingId,
    };
};

export default useAudioProvider;
