import React, { useEffect } from 'react';
import './LikedGifs.css';
import { GifItem } from '../gifItem/GifItem';

export const LikedGifs = ({ likedGifs, setLikedGifs }) => {
    useEffect(() => {
        const storedLikedGifs = JSON.parse(localStorage.getItem('likedGifs')) || [];
        if (storedLikedGifs) {
            setLikedGifs(storedLikedGifs);
           }
    }, []);

    return (
        <div className='liked-gifs-container'>
            <h2>Favourite GIFs</h2>
            {likedGifs.map((likedGif, id) => (
                <GifItem
                    key={id}
                    gifData={likedGif}
                    likedGifs={likedGifs}
                    setLikedGifs={setLikedGifs}
                />
            ))}
        </div>
    )
};


