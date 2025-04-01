import React, { useState } from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logout");
    handleClose();
  };

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
                navigate("/profile/5");
              } else {
                navigate(item.path);
              }
            }}
          >
            {item.Icon}
            <p className="text-xl">{item.title}</p>
          </div>
        ))}

        {/* Tweet Button */}
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>

      {/* Bottom Section (Profile & More Options) */}
      <div>
        {/* User Profile Section */}
        <div className="flex items-center justify-between mt-6 p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="flex items-center space-x-3 flex-nowrap">
            <Avatar alt="Gangul Ranaweera" src="/home/user.png" />
            <div className="whitespace-nowrap">
              <span className="block font-semibold whitespace-nowrap">Gangul Ranaweera</span>
              <span className="opacity-70 text-sm">@gangul</span>
            </div>
          </div>
          {/* More Options Button */}
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHoriz />
          </Button>
        </div>

        {/* Dropdown Menu */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
