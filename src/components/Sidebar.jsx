import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Switch from '@mui/material/Switch';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeNight from '@mui/icons-material/ModeNight';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PagesIcon from '@mui/icons-material/Pages';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = ({mode,setmode}) => {
  return (
    <Box  flex={1} p={2} sx={{ display: {xs:'none',sm:'block'}}}>
      <Box position='fixed'>
      <List>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <PagesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Diversity3Icon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setmode(mode==="light" ? 'dark':"light")}/>
            </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>

  )
}

export default Sidebar