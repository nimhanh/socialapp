import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-64 px-4 py-5 sticky top-0">
      {/* Logo */}
      <div className="mb-6">
        <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </div>

      {/* Navigation Menu */}
      <div className="space-y-6">
        {navigationMenu.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              if (item.title === "Profile") {
                navigate("/profile/5");  // ✅ Corrected navigation
              } else {
                navigate(item.path);
              }
            }}
          >
            {item.Icon}
            <p className="text-xl">{item.title}</p> {/* ✅ Fixed 'text-x1' to 'text-xl' */}
          </div>
        ))}

        {/* Button Section */}
        <div className='py-10'>
          <Button variant="contained" color="primary">
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
