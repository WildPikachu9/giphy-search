import React, { useState, useEffect, useRef } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = ({ setSearchedGif, setIsLoading }) => {
    const [inputValue, setInputValue] = useState('');
    const [moreItems, setMoreItems] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);

    const apiKey = 'HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O';

    const loadGifsOnScroll = () => {
        if(window.innerHeight + window.scrollY >=  document.body.scrollHeight) {
            setMoreItems(true);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', loadGifsOnScroll);
        return () => {
          window.removeEventListener('scroll', loadGifsOnScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&offset=${offset}&limit=${limit}`);
                const data = await response.json();

                const gifData = data.data;
                setSearchedGif((prevGifs) => [...prevGifs, ...gifData]);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching GIFs:', error);
                setIsLoading(false);
            };
        };

        if (moreItems) {
            fetchData();
            setOffset((prevOffset) => prevOffset + limit);
            setMoreItems(false);
        }
    }, [moreItems]);

    const searchedGifList = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        setSearchedGif([]);
        setOffset(0);
        
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&offset=${offset}&limit=${limit}`)
        .then((res) =>  res.json())
        .then((data) => {
            const gifData = data.data;
            setSearchedGif(gifData);
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