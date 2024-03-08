import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import Addpost from './components/Addpost'
import { Box, Stack,createTheme,ThemeProvider } from '@mui/material'

const App = () => {
  const [mode, setmode] = useState('dark')
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      
    
    <Box bgcolor={'background.default'} color={'text.primary'}>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar setmode={setmode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Addpost/>
    </Box></ThemeProvider>
  )
}

export default App
