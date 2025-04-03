import React, { useState } from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TweetCard from '../HomeSection/TweetCard';  // Updated import path

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => console.log("open profile model");
  const handleFollowUser = () => console.log("follow user");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) console.log("like tweet");
    else if (newValue === 1) console.log("users tweet");
  };

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <section className={'z-50 flex items-center sticky top-0 bg-opacity-95 bg-white p-2 shadow-md'}>
        <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
        <h1 className="text-xl font-bold opacity-90 ml-3">Code with Zosh</h1>
      </section>

      {/* Cover Image */}
      <section className="w-[600px]">
        <img className="w-full h-[15rem] object-cover" src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg" alt="Cover" />
      </section>

      {/* Profile Section */}
      <section className='p-3 relative w-[600px]'>
        <div className='flex justify-between items-start mt-5 h-[5rem] relative'>
          {/* Avatar */}
          <Avatar
            className='absolute -top-16 transform -translate-y-1/2 border-4 border-white shadow-lg'
            alt='code with zosh' 
            src='http://localhost:3000/home/user.png' 
            sx={{ width: "10rem", height: "10rem" }}
          />

          {/* Edit Profile Button */}
          <div className="ml-auto">
            {true ? (
              <Button 
                onClick={handleOpenProfileModel}
                variant='contained'
                sx={{ borderRadius: "20px", padding: "6px 16px" }}
              >
                Edit Profile
              </Button>
            ) : (
              <Button 
                onClick={handleFollowUser}
                variant='contained'
                sx={{ borderRadius: "20px", padding: "6px 16px" }}
              >
                {true ? "Follow" : "Unfollow"}
              </Button>
            )}
          </div>
        </div>

        {/* Profile Details */}
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg"> Code with Zosh</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" 
                alt=""
              />
            )}
          </div>
          <h1 className='text-gray-500'>@codewithzosh</h1>
        </div>

        {/* Bio and Info */}
        <div className="mt-2 space-y-2 pl-1">
          <p>Hello, I'm Code with Zosh</p>
          <div className='py-1 flex space-x-5'>

            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon/>
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon/>
              <p className="ml-2">Sri Lanka</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon/>
              <p className="ml-2">Joined 2025</p>
            </div>
          </div>

          {/* Followers & Following */}
          <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>190</span>
              <span className='text-gray-500'>Following</span>
            </div>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>590</span>
              <span className='text-gray-500'>Followers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-5 w-[600px]">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} aria-label="Profile Tabs">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1">
            {[1, 2, 3, 4].map((item) => (
               <TweetCard key={item} />
             ))}

              
            </TabPanel>
            <TabPanel value="1">Users tweets</TabPanel>
            <TabPanel value="2">Users replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
    </div>
  );
};

export default Profile;
