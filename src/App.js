import './App.css';
import React, { useState } from 'react';
import { LikedGifs } from './components/likedGifs/LikedGifs';
import { Search } from './components/search/Search';
import { SearchedItems } from './components/searchedItems/SearchedItems';

function App() {
  const [searchedGif, setSearchedGif] = useState([]);
  const [likedGifs, setLikedGifs] = useState([]);

  return (
    <div className="App">
      <Search setSearchedGif={setSearchedGif} />
      <SearchedItems searchedGif={searchedGif} likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
      <LikedGifs likedGifs={likedGifs} setLikedGifs={setLikedGifs} />
    </div>
  );
}

export default App;
