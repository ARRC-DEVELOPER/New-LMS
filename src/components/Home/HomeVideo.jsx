import { Box, Container, Image } from '@chakra-ui/react';
import React from 'react';

// importing images
import HomeVideoBg from '../../assets/home_video_section.png';
import { FaPlay, FaRegPlayCircle } from 'react-icons/fa';

const d = () => {
  return (
    <Box className="home-video">
      <Box className="home-video-mask"></Box>
      <Box
        maxWidth={'1200px'}
        height={'500px'}
        position={'relative'}
        top={'10%'}
        borderRadius={'15px'}
        m={'auto'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image src={HomeVideoBg} borderRadius={'15px'} m={'auto'} />
        <Box position={'absolute'} className='video-play-container video-play-button'>
          {/* <FaRegPlayCircle /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default d;
