import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

    // Example Logout Function
    const handleLogout = () => {
        console.log("Logout clicked");
        handleClose();
    };

    const handleDeleteTweet =() =>{
      console.log("delete teweet")
      handleClose();
    }

    return (
        <div className="p-4 border-b border-gray-200">
            {/* Retweet Section (Uncomment if needed) */}
            {/* <div className="flex items-center font-semibold text-gray-700 py-2">
                <RepeatIcon />
                <p>You Retweeted</p>
            </div> */}

            <div className="flex space-x-4">
                {/* Avatar */}
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className="cursor-pointer"
                    alt="username"
                    src="http://res.cloudinary.com/dnbw64gbs/image/upload/v1690639851/instagram%20post/bywfgd9vj4q80aywscss.png"
                />

                {/* Tweet Content */}
                <div className="w-full">
                    <div onClick={()=>navigate('/twit/${3}')} className="flex justify-between items-center">
                        <div className="flex cursor-pointer items-center space-x-2">
                            <span className="font-semibold">Code With Zosh</span>
                            <span className="text-gray-600">@codewithzosh · 2m</span>
                            <img 
                                className="ml-2 w-5 h-5" 
                                src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee@la.png" 
                                alt="Verified"
                            />
                        </div>

                        {/* More Options Button */}
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        > 
                            <MoreHorizIcon />
                        </Button>

                        {/* Dropdown Menu */}
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                            <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                        </Menu>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default TweetCard;
