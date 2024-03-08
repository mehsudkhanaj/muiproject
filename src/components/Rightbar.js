import List from '@mui/material/List'

import { Box, AvatarGroup, ImageList, ImageListItem } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
const Rightbar = () => {
  return (
    <Box flex={2} p={2}>
      <Box position='fixed' width='auto' mt={2}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt='Remy Sharp'
            src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
              alt='ik'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
              alt='ik'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://c.ndtvimg.com/2022-05/mtk5q5n_imran-khan-afp_625x300_24_May_22.jpg'
              alt='ik'
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://media.vanityfair.com/photos/5d79664a72901e0009b618f1/master/w_2560%2Cc_limit/Imran-Khan-1019-lede.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Waleed Bin khalid'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Developer
                </Typography>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://media.vanityfair.com/photos/5d79664a72901e0009b618f1/master/w_2560%2Cc_limit/Imran-Khan-1019-lede.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Uzair Majeed'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Designer
                </Typography>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='https://media.vanityfair.com/photos/5d79664a72901e0009b618f1/master/w_2560%2Cc_limit/Imran-Khan-1019-lede.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Muhammad Jamshed'
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Intern
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
