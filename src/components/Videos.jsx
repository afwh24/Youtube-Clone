import {Stack,Box} from '@mui/material';

import {VideoCard, ChannelCard} from './';

const Videos = ({results, direction}) => {

  if(!results?.length) return "loading...";

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {results.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}

        </Box>
      ))}

    </Stack>

  )
}

export default Videos