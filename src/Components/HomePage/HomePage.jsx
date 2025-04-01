// HomePage.jsx
import React from 'react';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import Profile from '../Profile/Profile';
import TwitDetails from './TwitDetails';

const HomePage = () => {
  return (
    <Grid container className="px-5 lg:px-36 flex justify-between items-start mt-2">
      
      {/* Left Part */}
      <Grid 
        item 
        xs={0} 
        lg={2.5} 
        className="hidden lg:flex justify-start relative pr-6" // Added pr-4 for padding
      >
        <Navigation />
        <div className="absolute right-0 top-0 h-full w-px bg-gray-200 transform translate-x-2"></div>
      </Grid>

      {/* Middle Part */}
      <Grid 
        item 
        xs={12} 
        lg={6} 
        className="flex justify-center relative px-12" // Added px-4 for padding
      >
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/twit/:id" element={<TwitDetails />}></Route>
        </Routes>
        <div className="absolute right-0 top-0 h-full w-px bg-gray-200 transform translate-x-2"></div>
      </Grid>

      {/* Right Part */}
      <Grid 
        item 
        xs={0} 
        lg={3} 
        className="hidden lg:flex justify-end pl-4" // Added pl-4 for padding
      >
        <RightPart />
      </Grid>

    </Grid>
  );
};

export default HomePage;