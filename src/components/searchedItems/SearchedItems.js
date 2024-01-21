import React from 'react';
import './SearchedItems.css';
import { GifItem } from '../gifItem/GifItem';
import { Loader } from '../loader/Loader';

export const SearchedItems = ({ searchedGif, likedGifs, setLikedGifs, isLoading }) => {

    return ( 
        <div className='searched-items-container'>
            <div
                className='searched-items'
            >
                {searchedGif.map((gif, index) => (
                    <GifItem 
                        key={index} 
                        gifData={gif}
                        likedGifs={likedGifs}
                        setLikedGifs={setLikedGifs}
                    />
                ))}
            </div>
            {isLoading ? <Loader /> : null}
        </div>
    )
};