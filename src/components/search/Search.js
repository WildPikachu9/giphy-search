import React, { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = ({ setSearchedGif, setIsLoading }) => {
    const [inputValue, setInputValue] = useState('');

    const searchedGifList = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const apiKey = 'HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O';

        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}`)
        .then((res) =>  res.json())
        .then((data) => {
            const gifData = data.data;
            setSearchedGif(gifData);
            setInputValue('');
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
            setIsLoading(false);
        })
    };

    return (
        <div className='search-container'>
            <form onSubmit={searchedGifList}>
                <input 
                    className='search-input'
                    type="text"
                    name="searchGif"
                    placeholder="Search gif"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                    className='search-button'
                    type='submit'
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
};