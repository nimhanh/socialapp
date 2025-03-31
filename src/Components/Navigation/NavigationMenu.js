//NavigationMenu.js
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';

export const navigationMenu = [
    {
        title: "Home",
        Icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Explore",
        Icon: <ExploreIcon />,
        path: "/explore"
    },
    {
        title: "Notifications",
        Icon: <NotificationsIcon />, // Fixed name
        path: "/notification"
    },
    {
        title: "Messages",
        Icon: <MessageIcon />,
        path: "/messages"
    },
    {
        title: "Lists",
        Icon: <ListAltIcon />,
        path: "/list"
    },
    {
        title: "Communities",
        Icon: <GroupIcon />, // Fixed name
        path: "/communities"
    },
    {
        title: "Verified",
        Icon: <VerifiedIcon />,
        path: "/verified"
    },
    {
        title: "Profile",
        Icon: <AccountCircleIcon />,
        path: "/profile"
    },
    {
        title: "Pending",
        Icon: <PendingIcon />,
        path: "/more"
    }
];
