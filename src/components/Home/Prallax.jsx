import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <Container maxW="1200px" mt={5}>
      <Box
        height="400px"
        position="relative"
        overflow="hidden"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgImage: `url('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww')`, // Replace with your image
          bgPos: `center ${offsetY * 0.5}px`,
          bgSize: 'cover',
          zIndex: -1,
          transition: 'background-position 0.1s',
        }}
      >
        <Heading as="h2" color="white" textAlign="center" pt="150px">
          Parallax Effect
        </Heading>
        <Text color="white" textAlign="center">
          Scroll to see the parallax effect in action.
        </Text>
      </Box>
    </Container>
  );
};

export default Parallax;
