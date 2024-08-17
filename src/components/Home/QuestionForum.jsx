import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';
import ForumSection from '../../assets/forum_section.jpg';
import Circle from '../../assets/circle-4.png';
import Dot from '../../assets/dot.png';
import './home.css';

const QuestionForum = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "auto", lg: "100vh" }}
      px={8}
      marginTop={{ base: "0", lg: "-200px" }}
      gap={{ base: 8, lg: 40 }}
    >
      <Box position={'relative'} boxSizing="border-box" textAlign={{ base: "center", lg: "left" }}>
        <Image
          src={ForumSection}
          alt="Forum Section"
          m={'auto'}
          className="instructor-right-box" 
        />
        <Image
          src={Circle}
          alt="circle"
          position={'absolute'}
          top={'-50px'}
          right={{ base: "-15%", lg: "-22%" }}
          zIndex={-1}
        />
        <Image src={Dot} alt="dot" className="istructor-dot-png-left" />
      </Box>

      <Box boxSizing="border-box" textAlign={{ base: "center", lg: "left" }}>
        <Heading
          as="h2"
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.25rem" }}
          lineHeight={1.22}
          color={'#343434'}
          fontWeight={700}
        >
          Have a Question? Ask it in forum and get answer
        </Heading>
        <Text
          fontSize={{ base: "0.875rem", md: "1rem" }}
          lineHeight={1.5}
          color={'#818894'}
          fontWeight={400}
          mt={'10px'}
          maxW={{ base: "100%", lg: "90%" }}
          mx={{ base: "auto", lg: "0" }}
        >
          Our forums help you to create your questions on different subjects and communicate with other forum users. Our users will help you to get the best answer!
        </Text>
        <Flex gap={4} mt={8} justifyContent={{ base: "center", lg: "flex-start" }}>
          <Button className="btn-primary">Create a new topic</Button>
          <Button
            variant="outline"
            colorScheme="green"
            className="btn-secondary"
          >
            Browse Forums
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default QuestionForum;
