import './App.css';
import React, { useState } from 'react';
import { LikedGifs } from './components/likedGifs/LikedGifs';
import { Search } from './components/search/Search';
import { SearchedItems } from './components/searchedItems/SearchedItems';

function App() {
  const [searchedGif, setSearchedGif] = useState([]);
  const [likedGifs, setLikedGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Search setSearchedGif={setSearchedGif} setIsLoading={setIsLoading} />
      <SearchedItems searchedGif={searchedGif} likedGifs={likedGifs} setLikedGifs={setLikedGifs} isLoading={isLoading} />
      <LikedGifs likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
    </div>
  );
}

export default App;
