import React from 'react'

import {Box,Card,Avatar,CardHeader,Typography,CardContent,CardMedia ,CardActions,Checkbox } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {FavoriteBorder} from '@mui/icons-material'

const Post = () => {
  return (
    <Card sx={{margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="profile">
          MJ
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Muhammad Jamshed"
      subheader="Dec 11, 2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://avatars.githubusercontent.com/u/91126856?v=4"
      alt="Pic"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Muhammad Jamshed a passionate front end Developer at Muskeeters Tech Pvt Ltd Gulber2 Lahore
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      
    </CardActions>
    
  </Card>
  )
}

export default Post