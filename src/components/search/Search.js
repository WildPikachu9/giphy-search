import React, { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = ({ setSearchedGif }) => {

    const [inputValue, setInputValue] = useState('');

    const searchedGifList = async (e) => {
        e.preventDefault();
        const apiKey = 'HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O';

        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}`)
        .then((res) =>  res.json())
        .then((data) => {
            const gifData = data.data;
            setSearchedGif(gifData);
            setInputValue('');
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
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