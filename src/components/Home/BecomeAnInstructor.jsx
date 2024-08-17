import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';
import BecomeAnInstructorImg from '../../assets/become_instructor_banner.jpg';
import Circle from '../../assets/circle-4.png';
import Dot from '../../assets/dot.png';
import instructorIcon from '../../assets/istructorIcon.png';
import './home.css';

const BecomeAnInstructor = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "auto", lg: "100vh" }}
      px={8}
      marginTop={{ base: "0", lg: "-90px" }}
      gap={8}
    >
      <Box marginRight={{ base: "0", lg: "-200px" }} textAlign={{ base: "center", lg: "left" }}>
        <Heading
          as="h2"
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.25rem" }}
          lineHeight={1.22}
          color={'#343434'}
          fontWeight={700}
        >
          Become an Instructor
        </Heading>
        <Text
          fontSize={{ base: "0.875rem", md: "1rem" }}
          lineHeight={1.5}
          color={'#818894'}
          fontWeight={400}
          mt={'10px'}
          maxW={{ base: "100%", lg: "70%" }}
          mx={{ base: "auto", lg: "0" }}
        >
          Are you interested to be a part of our community? You can be a part of
          our community by signing up as an instructor or organization.
        </Text>
        <Flex gap={4} mt={8} justifyContent={{ base: "center", lg: "flex-start" }}>
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

      <Box width={{ base: "100%", lg: "80%" }} position={'relative'} boxSizing="border-box">
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
          right={{ base: "10%", lg: "7%" }}
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
