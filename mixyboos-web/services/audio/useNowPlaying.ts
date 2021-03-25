import React, { useCallback, useContext } from 'react';
import { nowPlayingContext } from './context';

export const useNowPlaying = () => {
    const { nowPlayingId, setNowPlayingId } = useContext(nowPlayingContext);

    const setNowPlaying = useCallback(
        (id: string) => {
            setNowPlayingId(id);
            return id;
        },
        [setNowPlayingId]
    );
    return { setNowPlaying };
};
