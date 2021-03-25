import React from 'react';
import {
    AudioPlayerContext,
    AudioPlayerPositionContext,
    NowPlayingContext,
} from './types';

export const playerContext = React.createContext<AudioPlayerContext | null>(
    null
);

export const positionContext = React.createContext<AudioPlayerPositionContext>({
    position: 0,
    setPosition: () => {},
});

export const nowPlayingContext = React.createContext<NowPlayingContext>({
    nowPlayingId: null,
    setNowPlayingId: () => {},
});
