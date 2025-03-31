import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Box, Tab } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedIcon from "@mui/icons-material/Verified";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from '../HomeFeed/TweetCard';

const Profile = () => {
    const[tabValue,setTabValue]=useState("1")
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };

  const handleFollowUser = () => {
    console.log("follow user");
  };

  const handleTabChange=(event,newValue)=>{
    setTabValue(newValue)

    if(newValue===4){
        console.log("like twit")
    }
    else if(newValue===1){
        console.log("users twist")
    }
  }

  return (
    <div className="relative">
      {/* Header Section */}
      <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-95 p-4">
        <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
        <h1 className="text-xl font-bold opacity-90 ml-3">Code with Zosh</h1>
      </section>

      {/* Background Image Section */}
      <section className="relative">
        <img
          className="w-full h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg"
          alt=""
        />

        {/* Edit Profile Button */}
        <div className="absolute top-4 right-4">
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        {/* Profile Avatar Section */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Avatar
            alt="Code with Zosh"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            sx={{ width: "8rem", height: "8rem", border: "4px solid white" }}
          />
        </div>

        <div className="mt-10">
          <div className="flex items-center">
            <h1 className="font-bold-text-lg">Code with zosh</h1>
            {true && (
              <VerifiedIcon className="text-[#1d9bf0] ml-2" sx={{ fontSize: 20 }} />
            )}
          </div>
          <h1 className="text-gray-500">@codewithzosh</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>Hello, I'm Code with Zosh</p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Indian</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined 2025</p>
            </div>
          </div>

          <div className="flex item-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>190</span>
              <span className="text-gray-500">following</span>
            </div>

            <div className="flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className="text-gray-500">followers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
            {[1, 1, 1, 1].map((item) => <TweetCard/>)}
            </TabPanel>
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