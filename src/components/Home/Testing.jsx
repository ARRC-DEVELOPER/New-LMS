import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import './home.css';

const Testing = () => (
  <Flex
    w="full"
    h="50vh"
    alignItems="center"
    justifyContent="space-between"
    px={16}
    bg="white"
  >
    <Box className="testing">
      <Heading as="h2" fontSize="4xl" fontWeight="bold" color="purple.600">
        Join us as an
      </Heading>
      <Heading as="h1" fontSize="6xl" fontWeight="bold">
        Instructor
      </Heading>
      <Text fontSize="xl" color="gray.500">
        and start earning
      </Text>
    </Box>
    <Box>
      {/* Replace with your image */}
      <img src="https://via.placeholder.com/600x400" alt="Instructor" />
    </Box>
  </Flex>
);

export default Testing;
