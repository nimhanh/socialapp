import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPart = () => {
    const handleChangeTheme = () => {
        console.log("handle change theme");
    };

    return (
        <div className="py-5 sticky top-0">
            {/* Search Bar */}
            <div className="relative flex items-center">
                <input 
                    type="text" 
                    className="py-3 rounded-full text-gray-500 w-full pl-12" 
                    placeholder="Search..."
                />
                <div className="absolute top-0 left-0 pl-3 pt-3">
                    <SearchIcon className="text-gray-500" />
                </div>
                <Brightness4Icon 
                    className="ml-3 cursor-pointer" 
                    onClick={handleChangeTheme} 
                />
            </div>

            {/* Verification Section */}
            <section className="my-5">
                <h1 className="text-xl font-bold">Get verified</h1>
                <h1 className="font-bold my-2">Subscribe to unlock new features</h1>
                <Button variant="contained" sx={{ padding: "19px", px: "29px", borderRadius: "25px" }}>
                    Get Verified 
                </Button>
            </section>

            {/* Trending Section */}
            <section className="mt-7 space-y-5">
                <h1 className="font-bold text-xl py-1">What's happening</h1>
                
                <div>
                    <p className="text-sm">FIFA Women's World Cup</p>
                    <p className="text-sm">Sri Lanka vs India</p>
                    <p className="text-sm">Entertainment · Trending</p>

                    <p className="font-bold">Sri Lanka vs India</p>
                </div>

                {/* Trending Topics Loop */}
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="flex justify-between w-full">
                        <div>
                            <p className="text-sm text-gray-500">Entertainment · Trending</p>
                            <p className="font-bold">#TheMarvels</p>
                            <p className="text-sm text-gray-500">34.3k Tweets</p>
                        </div>
                        <MoreHorizIcon />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RightPart;
