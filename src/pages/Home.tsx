import React from 'react';
import './Home.css';

import { Avatar, Button } from '@mui/material';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

import { Link } from 'react-router-dom';

// Components
import Search from '../components/Search';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsRoundedIcon />
          <Button variant="contained">Sign in</Button>
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
