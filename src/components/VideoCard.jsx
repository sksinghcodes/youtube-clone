import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle
} from '../utils/Constants';

const VideoCard = ({video}) => {
    const { id, snippet } = video;
    return (
        <Card sx={{width: 358}}>
            <Link to={`/video/${id.videoId}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    component="img"
                    alt=""
                    sx={{width: 358, height: 180}}
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor:'#1e1e1e',
                    height: '106px',
                }}
            >
                <Link to={`/video/${id.videoId}`}>
                    <Typography
                        variant="subtitle1"
                        color="#fff"
                        fontWeight="bold"
                    >
                        {snippet?.title?.slice(0,60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
}
 
export default VideoCard;