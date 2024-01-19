import React from 'react';
import './SearchedItems.css';
import { GifItem } from '../gifItem/GifItem';

export const SearchedItems = ({ searchedGif, likedGifs, setLikedGifs }) => {
    return ( 
        <div className='searched-items-container'>
            {searchedGif.map((gif, index) => (
                <GifItem 
                    key={index} 
                    gifData={gif}
                    likedGifs={likedGifs}
                    setLikedGifs={setLikedGifs}
                />
            ))}
        </div>
    )
};