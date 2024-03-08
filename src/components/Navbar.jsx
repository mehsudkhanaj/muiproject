import { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets'
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  AppBar,
  Badge,
  Toolbar,
  styled,
  Typography,
  InputBase
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '35%'
}))
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          {' '}
          Mini Facebook
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search...'></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon color='action' />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://avatars.githubusercontent.com/u/91126856?v=4'
            onClick={e => setopen(true)}
          />
        </Icons>
        <UserBox onClick={e => setopen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://avatars.githubusercontent.com/u/91126856?v=4'
          />
          <Typography variant='span'> Jamshed</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={e => setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

