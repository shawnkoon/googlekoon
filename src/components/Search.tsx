import React from 'react';
import './Search.css';

import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

import { Button } from '@mui/material';

function Search() {
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button variant="outlined" type="submit">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
