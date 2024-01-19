import './App.css';
import React, { useState } from 'react';
import { LikedGifs } from './components/likedGifs/LikedGifs';
import { Search } from './components/search/Search';
import { SearchedItems } from './components/searchedItems/SearchedItems';
import { Loader } from './components/loader/Loader';

function App() {
  const [searchedGif, setSearchedGif] = useState([]);
  const [likedGifs, setLikedGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Search setSearchedGif={setSearchedGif} setIsLoading={setIsLoading} />
      {isLoading ?
        <Loader /> 
        : 
        <SearchedItems searchedGif={searchedGif} likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
      }
      <LikedGifs likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
    </div>
  );
}

export default App;
