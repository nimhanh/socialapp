// HomePage.jsx
import React from 'react';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import Profile from '../Profile/Profile'; // ✅ Import Profile component
import TwitDetails from './TwitDetails'

const HomePage = () => {
  return (
    <Grid container className="px-5 lg:px-36 flex justify-between items-start mt-2">
      
      {/* Left Part */}
      <Grid item xs={0} lg={2.5} className="hidden lg:flex justify-start">
        <Navigation />
      </Grid>

      {/* Middle Part */}
      <Grid item xs={12} lg={6} className="flex justify-center">
        <Routes>
          <Route path="/" element={<HomeSection />} > </Route>
          <Route path="/home" element={<HomeSection />} > </Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/twit/:id" element={<TwitDetails />}></Route>
        </Routes>
      </Grid>

      {/* Right Part */}
      <Grid item xs={0} lg={3} className="hidden lg:flex justify-end">
        <RightPart />
      </Grid>

    </Grid>
  );
};

export default HomePage;
