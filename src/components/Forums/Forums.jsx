import React, { Fragment } from 'react';

// importing css
import './forums.css';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';

// importing images
import banner from '../../assets/forums.png';
import forum_que from '../../assets/forum-question-banner.png';

import stat1 from '../../assets/stat-1.svg';
import stat2 from '../../assets/stat2.svg';
import stat3 from '../../assets/stat3.svg';
import stat4 from '../../assets/stat4.svg';

import featured_section from '../../assets/featured_section.svg';
import forum_featured1 from '../../assets/forum-featured1.svg';
import forum_featured2 from '../../assets/forum-featured2.svg';
import forum_featured3 from '../../assets/forum-featured3.svg';
import forum_featured4 from '../../assets/forum-featured4.svg';

import forum_user1 from '../../assets/forum-user1.png';
import forum_user2 from '../../assets/forum-user2.png';

const Forums = () => {
  const featured_posts = [
    {
      image: forum_featured1,
      title: 'What is social Media',
      description:
        'Social media is a collective term for websites and applications that focus on communication, ...',
      author: 'Cameron Schofield',
      posts: 4,
    },
    {
      image: forum_featured2,
      title: 'How do you put a Group Link in a note card',
      description:
        'I want to create a note card that lists clickable LMs (EASY to do) to the 14 music hangouts (nearly ...',
      author: 'Robert B. Gray',
      posts: 2,
    },
    {
      image: forum_featured3,
      title: 'The best texture quality settings for makeup',
      description: `Hello everyone ❣️ I don't know if I'm at the right place for my question, but I hope so... ...`,
      author: 'Jade Harrison',
      posts: 2,
    },
    {
      image: forum_featured4,
      title: 'What favorite food and or beverage do you enjoy',
      description:
        'I am amazed  and thankful to SL for all the wonderful things and ability to reach  out to ...',
      author: 'Cameron Schofield',
      posts: 3,
    },
  ];

  return (
    <div className="forums">
      <div className="container">
        <section className="forum-top-banner">
          <Image src={banner} className="forum-img-cover" />
          <Container
            maxWidth={'1200px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            height={'100%'}
            position={'relative'}
            zIndex={'2'}
          >
            <Box w={'42%'}>
              <Heading
                fontSize={'2.25rem'}
                fontWeight={'bold'}
                lineHeight={1.2}
                color={'#1f3b64'}
              >
                <span>Need help?</span>
                <br />
                <span>Create a topic in the forum...</span>
              </Heading>

              <Text textColor={'gray'} mt={15} fontSize={'14px'}>
                If you need help with any included topic, you can create a topic
                in the forum and start communication with other users.
              </Text>

              <HStack spacing={4} marginTop={10} position="relative" w="100%">
                <Input
                  w="full"
                  padding={8}
                  bgColor="white"
                  borderRadius="full"
                  placeholder="Search discussions..."
                  pr="120px"
                  //   boxShadow={"0 0 15px 0 rgba(0, 0, 0, 0.03)"}
                />
                <Button
                  colorScheme="green"
                  borderRadius="full"
                  px={8}
                  py={6}
                  position="absolute"
                  right="3"
                  zIndex={2}
                >
                  Search
                </Button>
              </HStack>
            </Box>
          </Container>
        </section>

        <section className="forum-stats">
          <Container maxWidth={'1200px'}>
            <ForumStats />
          </Container>
        </section>

        <section className="forum-featured">
          <Box>
            <Image src={featured_section} className="featured-img-cover" />
            <Container maxWidth={'1200px'} zIndex={'2'} textAlign={'center'}>
              <Box marginBottom={'30px'}>
                <Heading
                  fontSize={'1.875rem'}
                  fontWeight={'bold'}
                  lineHeight={1.2}
                  color={'#1f3b64'}
                >
                  Featured Topics
                </Heading>
                <Text textColor={'gray'} fontSize={'14px'}>
                  Explore featured topics and get involved in the conversation
                </Text>
              </Box>

              <Box
                display={'flex'}
                flexDirection={'column'}
                gap={5}
                marginTop={'15px'}
              >
                <FeaturedSection featured_posts={featured_posts} />
              </Box>
            </Container>
          </Box>
        </section>

        <section className="forum-question">
          <Container maxWidth={'1200px'}>
            <Box
              className="forum-question-section"
              display={'flex'}
              flexDirection={'row'}
              width={'full'}
              minH={"372px"}
              position={'relative'}
            >
              <Box boxSizing="border-box" px={10} py={25} w={'60%'}>
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
                  Our forums helps you to create your questions on different
                  subjects and communicate with other forum users. Our users
                  will help you to get the best answer!
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

              <Box w={"40%"}>
                <Image src={forum_que} height={'auto'} marginTop={"-91px"} position={'absolute'} right={20} top={0} />
              </Box>
            </Box>
          </Container>
        </section>
      </div>
    </div>
  );
};

const ForumStats = () => {
  return (
    <Fragment>
      <Box
        className="forum-stats-section"
        display={'flex'}
        justifyContent={'space-around'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={stat1} />
          <Text fontWeight={'bold'} fontSize={'1.875rem'} color={'#1f3b64'}>
            8
          </Text>
          <Text textColor={'gray'} fontWeight={500} fontSize={'1rem'}>
            Forum
          </Text>
        </Box>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={stat2} />
          <Text fontWeight={'bold'} fontSize={'1.875rem'} color={'#1f3b64'}>
            10
          </Text>
          <Text textColor={'gray'} fontWeight={500} fontSize={'1rem'}>
            Topics
          </Text>
        </Box>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={stat3} />
          <Text fontWeight={'bold'} fontSize={'1.875rem'} color={'#1f3b64'}>
            19
          </Text>
          <Text textColor={'gray'} fontWeight={500} fontSize={'1rem'}>
            Posts
          </Text>
        </Box>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image src={stat4} />
          <Text fontWeight={'bold'} fontSize={'1.875rem'} color={'#1f3b64'}>
            13
          </Text>
          <Text textColor={'gray'} fontWeight={500} fontSize={'1rem'}>
            Members
          </Text>
        </Box>
      </Box>
    </Fragment>
  );
};

const FeaturedSection = ({ featured_posts }) => {
  console.log(featured_posts.length);
  return (
    <Fragment>
      {featured_posts.map(item => (
        <Box className="forum-featured-section" display={'flex'} gap={5}>
          <Box>
            <Image src={item.image} />
          </Box>

          <Box textAlign={'start'}>
            <Text fontSize={'1rem'} fontWeight={700} color={'#343434'}>
              {item.title}
            </Text>
            <Text fontSize={'0.875rem'} textColor={'gray'}>
              {item.description}
            </Text>

            <Box
              marginTop={'15px'}
              marginLeft={'8px'}
              display={'flex'}
              alignItems={'center'}
            >
              <Image src={forum_user1} className="user-avatar-card" />
              <Image src={forum_user2} className="user-avatar-card" />
              <Box
                className="user-avatar-card"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Text textColor={'gray'} fontSize={'0.75rem'}>
                  +2
                </Text>
              </Box>

              <Box marginLeft={2}>
                <Text fontSize={'0.75rem'} textColor={'gray'}>
                  Created by <strong>{item.author}</strong>
                </Text>
              </Box>

              <Text
                fontSize={'0.75rem'}
                textColor={'gray'}
                marginLeft={2}
                paddingLeft={'5px'}
                borderLeft={'1px solid #ececec'}
              >
                {' '}
                {item.posts} Posts{' '}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Fragment>
  );
};

export default Forums;
