import React, { useState } from 'react';
import './SearchedItems.css';
import { GifItem } from '../gifItem/GifItem';
import InfiniteScroll from 'react-infinite-scroller';

export const SearchedItems = ({ searchedGif, likedGifs, setLikedGifs }) => {
    const [displayedItems, setDisplayedItems] = useState(10);

    const fetchMoreData = () =>{
        setDisplayedItems(prev => prev + 10);
    };

    return ( 
        <div className='searched-items-container'>
            <InfiniteScroll
                className='searched-items'
                loadMore={fetchMoreData}
                hasMore={displayedItems < searchedGif.length}
            >
                {searchedGif.slice(0, displayedItems).map((gif, index) => (
                    <GifItem 
                        key={index} 
                        gifData={gif}
                        likedGifs={likedGifs}
                        setLikedGifs={setLikedGifs}
                    />
                ))}
            </InfiniteScroll>
        </div>
    )
};