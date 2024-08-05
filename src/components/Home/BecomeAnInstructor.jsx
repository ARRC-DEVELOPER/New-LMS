import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';

// importing images
import BecomeAnInstructorImg from '../../assets/become_instructor_banner.jpg';
import Circle from '../../assets/circle-4.png';
import Dot from '../../assets/dot.png';
import instructorIcon from '../../assets/istructorIcon.png';

// importing css
import './home.css';

const BecomeAnInstructor = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      px={8}
      marginTop={"-90px"}
    >
      <Box marginRight={'-200px'} boxSizing="border-box">
        <Heading
          as="h2"
          fontSize={'2.25rem'}
          lineHeight={1.22}
          color={'#343434'}
          fontWeight={700}
        >
          Become an Instructor
        </Heading>
        <Text
          fontSize={'1rem'}
          lineHeight={1.5}
          color={'#818894'}
          fontWeight={400}
          mt={'10px'}
          maxW={'70%'}
        >
          Are you interested to be a part of our community? You can be a part of
          our community by signing up as an instructor or organization.
        </Text>
        <Flex gap={4} mt={8}>
          <Button className="btn-primary">Become an Instructor</Button>
          <Button
            variant="outline"
            colorScheme="green"
            className="btn-secondary"
          >
            Registration Packages
          </Button>
        </Flex>
      </Box>

      <Box width="80%" position={'relative'} boxSizing="border-box">
        <Image
          src={BecomeAnInstructorImg}
          alt="Instructor"
          m={'auto'}
          className="instructor-right-box"
        />
        <Image
          src={Circle}
          alt="circle"
          position={'absolute'}
          top={'-50px'}
          right={'7%'}
          zIndex={-1}
        />
        <Image src={Dot} alt="dot" className="istructor-dot-png" />
        <Box className='instructor-bounce-box' display={'flex'} gap={3}>
          <Image src={instructorIcon} overflow={'hidden'} objectFit={'cover'} boxSizing='borderbox' boxSize="50px" />
          <Box>
            <Text color={"#1f3b64"} fontWeight={700}>Become an instructor</Text>
            <Text color={'GrayText'}>start earning right now...</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default BecomeAnInstructor;
