import React, { useEffect, useState } from 'react';

const AudioProvider: React.FC<any> = (props) => {
    // public play() {}
    // public pause() {}
    // public stop() {}
    // public fwd() {}
    // public back() {}
    return props.children;
};

const useAudioProvider = () => {
    const url =
        'https://cdn.podnoms.com/audio/656390fe-a393-42df-35f7-08d87e25db67.mp3';
    const audio: HTMLAudioElement = document.getElementById(
        'audio-container'
    ) as HTMLAudioElement;

    const [nowPlayingId, setNowPlayingId] = useState<string>();
    const [duration, setDuration] = useState<number>();
    const [currentPosition, setCurrentPosition] = useState<number>();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    //effect for when nowPlayingId changes
    useEffect(() => {
        if (nowPlayingId) {
            audio.pause();
            audio.src = url;
            audio.addEventListener('loadedmetadata', (event) => {
                console.log('AudioProvider', 'loadedmetadata', event);
                setDuration(audio.duration);
                audio.play();
            });
            audio.addEventListener('onprogress', (event) => {
                console.log('AudioProvider', 'progress', event);
            });
        }
    }, [nowPlayingId]);

    return {
        nowPlayingId,
        setNowPlayingId,
        duration,
        isPlaying,
        setIsPlaying,
        currentPosition,
        setCurrentPosition,
    };
};
export { AudioProvider, useAudioProvider };
