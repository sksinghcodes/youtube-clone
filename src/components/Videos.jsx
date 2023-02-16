import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({videos}) => {
    console.log(videos)
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="start"
            gap={2}
        >
            {videos.map(item => {
                return <Box key={item.id.videoId || item.id.channelId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            })}
        </Stack>
    );
}
 
export default Videos;