import { Box, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';

// importing images
import HomeVideoBg from '../../assets/home_video_section.png';
import { FaPlay } from 'react-icons/fa';

const HomeVideo = () => {
  return (
    <Box className="home-video" position="relative" height={["70vh", "100vh"]}>
      <Box className="home-video-mask" height={["150px", "300px"]}></Box>
      <Box
        maxWidth={'1200px'}
        height={["300px", "500px"]}
        position={'relative'}
        top={'10%'}
        borderRadius={'15px'}
        m={'auto'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={["column", "row"]}
      >
        <Image 
          src={HomeVideoBg} 
          borderRadius={'15px'} 
          m={'auto'} 
          width={["100%", "auto"]} 
        />
        <Box position={'absolute'} className="video-play-container"></Box>

        <Box
          position={'absolute'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          className="video-play-button"
        >
          <FaPlay size={20} />
        </Box>

        <Box
          position={'absolute'}
          className="video-text"
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          bottom={['10%', '5%']}
          textAlign={'center'}
        >
          <Text fontSize={['18px', '24px']} fontWeight={'bold'} lineHeight={1.22}>
            Start learning anywhere, anytime...
          </Text>
          <Text fontSize={['14px', '16px']} mt={'10px'} fontWeight={400}>
            Use ARRC Technology LMS to access high-quality education materials without
            any limitations in the easiest way.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeVideo;
