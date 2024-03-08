import { useState } from 'react'

import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import DateRangeIcon from '@mui/icons-material/DateRange'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import {
  styled,
  Stack,
  Avatar,
  TextField,
  Button,
  ButtonGroup
} from '@mui/material'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '2px'
})
const cstyle = {
  textAlign: 'center',

  width: '400px',
  height: '300px',
  borderRadius: '14px',
  color: 'black'
}

const Addpost = () => {
  const [open, setopen] = useState(false)

  return (
    <>
      <Tooltip
        onClick={e => setopen(true)}
        title='Delete'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(41%)', md: 30 }
        }}
      >
        <IconButton>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setopen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={cstyle} p={2} bgcolor='white'>
          <Typography variant='h6' color='gray'>
            Create a new post
          </Typography>
          <UserBox>
            <Avatar
              src='https://static.independent.co.uk/2023/11/28/08/Pakistan_Politics_40762.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp'
              sx={{
                width: 30,
                height: 30
              }}
            />
            <Typography variant='body1' color='initial'>
              Imran khan
            </Typography>
          </UserBox>
          <TextField
            id='standard-multiline-static'
            sx={{
              width: '100%'
            }}
            multiline
            row={4}
            placeholder="Place what's in your mind"
            variant='standard'
            color='secondary'
          />
          <Stack direction='row' gap={2} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary' />
            <CameraAltIcon color='secondary' />
            <VideoCameraBackIcon color='success' />
            <PersonAddAltIcon color='error' />
          </Stack>
          <ButtonGroup fullWidth variant='contained' color='primary'>
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Addpost
