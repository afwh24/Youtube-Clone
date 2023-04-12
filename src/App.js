import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box} from '@mui/material';

import { Navbar, Home, VideoInfo, ChannelInfo, SearchFeed} from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/video/:id" element={<VideoInfo />} />
                <Route path="/channel/:id" element={<ChannelInfo />} />
                <Route path="/search/:search" element={<SearchFeed />} />

            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App