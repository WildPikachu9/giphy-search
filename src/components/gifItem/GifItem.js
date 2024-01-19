import React, { useState, useEffect } from 'react';
import './GifItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark  } from '@fortawesome/free-solid-svg-icons';

export const GifItem = ({ gifData, likedGifs, setLikedGifs }) => {

    const [isHovered, setIsHovered] = useState(false);

    const isGifLiked = (gifId, likedGifs) => {
        return likedGifs.some((likedGif) => likedGif.id === gifId);
    };

    const handleLikeClick = () => {
        const gifId = gifData.id;
        
        if (!isGifLiked(gifData.id, likedGifs)) {
            setLikedGifs([...likedGifs, gifData]);
            localStorage.setItem('likedGifs', JSON.stringify([...likedGifs, gifData]));
        } else {
            const updatedLikedGifs = likedGifs.filter((unlikedGif) => unlikedGif.id !== gifId);
            setLikedGifs(updatedLikedGifs);
            localStorage.setItem('likedGifs', JSON.stringify(updatedLikedGifs));
        }; 
    };

    return (
        <div className='gif-item-container'>
            <button 
                className='liked-button'
                style={{ color: isGifLiked(gifData.id, likedGifs) ? 'red' : 'gray' }}
                onClick={handleLikeClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <FontAwesomeIcon icon={isHovered && isGifLiked(gifData.id, likedGifs) ? faXmark : faHeart} />
            </button>
            {gifData && (
                <img 
                    className='gif-item'
                    src={gifData.images.fixed_height.url} 
                    alt={gifData.title} 
                />
            )}
        </div>
    )
};


