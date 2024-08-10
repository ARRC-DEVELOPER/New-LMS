import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';

// importing images
import ForumSection from '../../assets/forum_section.jpg';
import Circle from '../../assets/circle-4.png';
import Dot from '../../assets/dot.png';

// importing css
import './home.css';

const QuestionForum = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      px={8}
      marginTop={'-200px'}
      gap={40}
    >
      <Box position={'relative'} boxSizing="border-box">
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
          right={'-22%'}
          zIndex={-1}
        />
        <Image src={Dot} alt="dot" className="istructor-dot-png-left" />
      </Box>

      <Box boxSizing="border-box">
        <Heading
          as="h2"
          fontSize={'2.25rem'}
          lineHeight={1.22}
          color={'#343434'}
          fontWeight={700}
        >
          Have a Question? Ask it in forum and get answer
        </Heading>
        <Text
          fontSize={'1rem'}
          lineHeight={1.5}
          color={'#818894'}
          fontWeight={400}
          mt={'10px'}
          maxW={'90%'}
        >
          Our forums helps you to create your questions on different subjects and communicate with other forum users. Our users will help you to get the best answer!
        </Text>
        <Flex gap={4} mt={8}>
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
