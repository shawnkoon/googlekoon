import React, { useState } from 'react';
import './Search.css';

import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/action';

interface SearchProps {
  hideButtons?: boolean;
}

function Search(props: SearchProps = { hideButtons: false }) {
  const [state, dispatch]: any = useStateValue();
  const [term, setTerm] = useState(state.term);
  const navigate = useNavigate();

  const search = (e: any) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term,
    });

    navigate('/search');
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={term || ''} onChange={(e) => setTerm(e.target.value)} />
        <MicIcon />
      </div>

      {!props.hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
