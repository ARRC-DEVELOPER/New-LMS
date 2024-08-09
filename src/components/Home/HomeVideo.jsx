import { Box, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';

// importing images
import HomeVideoBg from '../../assets/home_video_section.png';
import { FaPlay } from 'react-icons/fa';

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
        <Box position={'absolute'} className="video-play-container"></Box>

        <Box
          position={'absolute'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          className="video-play-button"
        >
          <FaPlay size={30} />
        </Box>

        <Box
          position={'absolute'}
          className="video-text"
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          bottom={'5%'}
        >
          <Text fontSize={'24px'} fontWeight={'bold'} lineHeight={1.22}>
            Start learning anywhere, anytime...
          </Text>
          <Text fontSize={'16px'} mt={'10px'} fontWeight={400}>
            Use ARRC Technology LMS to access high-quality education materials without
            any limitations in the easiest way.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default d;
