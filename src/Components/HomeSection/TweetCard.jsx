import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle Menu Open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle Menu Close
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("Delete tweet");
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("open model");
  };
  
  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };
  
  const handleLikeRetweet = () => {
    console.log("handle Like tweet");
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex space-x-4">
        <Avatar
          onClick={() => navigate(`/profile/6`)}
          className="cursor-pointer"
          alt="username"
          src="http://localhost:3000/home/user.png"
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Gangul Ranaweera</span>
              <span className="text-gray-600">@gangulr · 2m</span>
            </div>
            <Button onClick={handleClick}>
              <MoreHorizIcon />
            </Button>
          </div>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleDeleteTweet}>Delete Tweet</MenuItem>
            <MenuItem onClick={handleDeleteTweet}>Edit Tweet</MenuItem>
          </Menu>

          <p className="mt-2">This is a sample tweet content.</p>
          <img
            className="w-full max-w-[28rem] border border-gray-400 p-5 rounded-md"
            src="http://localhost:3000/home/lion.png"
            alt="Lion"
          />
          
          {/* Icons Section */}
          <div className="flex items-center space-x-8 mt-3 text-gray-600">
            <div className="flex items-center space-x-3">
              <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
              <p>43</p>
            </div>

            <div className="flex items-center space-x-3">
              <RepeatIcon onClick={handleCreateRetweet} className="cursor-pointer" />
              <p>54</p>
            </div>

            <div className="flex items-center space-x-3 text-pink-600">
              {true ? (
                <FavoriteIcon onClick={handleLikeRetweet} className="cursor-pointer" />
              ) : (
                <FavoriteOutlined onClick={handleLikeRetweet} className="cursor-pointer" />
              )}
              <p>54</p>
            </div>

            <div className="flex items-center space-x-3">
              <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
              <p>430</p>
            </div>

            <div className="flex items-center space-x-3">
              <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
