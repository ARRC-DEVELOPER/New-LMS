import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';

// importing images
import instructorFinderImg from '../../assets/instructor_finder_banner.jpg';
import Circle from '../../assets/circle-4.png';
import Dot from '../../assets/dot.png';
import mapIcon from '../../assets/mapIcon.png';

// importing css
import './home.css';

const FindBestInstructor = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      px={8}
      marginTop={'-200px'}
    >
      <Box marginRight={'-200px'} boxSizing="border-box">
        <Heading
          as="h2"
          fontSize={'2.25rem'}
          lineHeight={1.22}
          color={'#343434'}
          fontWeight={700}
        >
          Find the best instructor
        </Heading>
        <Text
          fontSize={'1rem'}
          lineHeight={1.5}
          color={'#818894'}
          fontWeight={400}
          mt={'10px'}
          maxW={'70%'}
        >
          Looking for an instructor? Find the best instructors according to
          different parameters like gender, skill level, price, meeting type,
          rating, etc. Find instructors on the map.
        </Text>
        <Flex gap={4} mt={8}>
          <Button className="btn-primary">Tutor Finder</Button>
          <Button
            variant="outline"
            colorScheme="green"
            className="btn-secondary"
          >
            Tutors on Map
          </Button>
        </Flex>
      </Box>

      <Box width="80%" position={'relative'} boxSizing="border-box">
        <Image
          src={instructorFinderImg}
          alt="Instructor"
          m={'auto'}
          className="instructor-right-box"
        />
        <Image
          src={Circle}
          alt="circle"
          position={'absolute'}
          top={'-50px'}
          right={'2%'}
          zIndex={-1}
        />
        <Image src={Dot} alt="dot" className="best-istructor-dot-png" />
        <Box className="best-instructor-bounce-box" display={'flex'} gap={3}>
          <Image
            src={mapIcon}
            overflow={'hidden'}
            objectFit={'cover'}
            boxSizing="borderbox"
            boxSize="50px"
          />
          <Box>
            <Text color={'#1f3b64'} fontWeight={700}>
              Tutor Finder
            </Text>
            <Text color={'GrayText'}>Find the best instructor now...</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default FindBestInstructor;
