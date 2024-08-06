import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';
import Slider from 'react-slick';

// importing css
import './home.css';

import { StarIcon } from '@chakra-ui/icons';

// importing images
import profilePic from '../../assets/profile_picture.jpg';

// Custom dot component
function CustomDot({ onClick, index, currentSlide }) {
  return (
    <Flex
      direction="column"
      align="center"
      onClick={onClick}
      mx={2}
      cursor="pointer"
    >
      <Box
        rounded="full"
        border="0.5px solid gray"
        w={6}
        h={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Box
          w={4}
          h={4}
          rounded="full"
          bg={index === currentSlide ? 'green.500' : 'gray.300'}
        />
      </Box>
    </Flex>
  );
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: 'New Learning Page',
      instructor: 'Robert Ransdell',
      rating: '5.0',
      hours: '3:30 Hours',
      date: '1 Mar 2022',
      price: 'Free',
    },
    {
      title: 'Advanced Strategies',
      instructor: 'Robert Ransdell',
      rating: '4.8',
      hours: '2:45 Hours',
      date: '15 Feb 2022',
      price: 'Subscribe',
    },
    {
      title: 'Installment and Secure Host',
      instructor: 'Jessica Wray',
      rating: '5.0',
      hours: '1:30 Hours',
      date: '15 Mar 2023',
      price: '₹ 8000',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      price: '₹ 8000',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      price: '₹ 8000',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      price: '₹ 8000',
    },
  ];

  //   Conditional Dot rendering
  const initialCards = 3;
  const numDots = Math.ceil((courses.length - initialCards + 1) / 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    customPaging: function (i) {
      if (i < numDots) {
        return (
          <CustomDot
            index={i}
            currentSlide={currentSlide}
            onClick={() => setCurrentSlide(i)}
          />
        );
      } else {
        return <div style={{ display: 'none' }} />;
      }
    },
    beforeChange: (current, next) => setCurrentSlide(next),
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <Fragment>
      <Container maxW={'1200px'}>
        <Box p={4} position={'relative'}>
          <Box
            className="testimonial-gradient-box left-gradient-box"
            position={'absolute'}
          ></Box>
          <Box
            className="testimonial-gradient-box right-gradient-box"
            position={'absolute'}
          ></Box>
          <Box
            w={'full'}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading
              as="h2"
              fontSize={'24px'}
              fontWeight={'bold'}
              color={'#1f3b64'}
            >
              Testimonials
            </Heading>
            <Text mt={'5px'} fontSize={'14px'} color={'#818894'}>
              #What our customers say about us
            </Text>
          </Box>

          <Box marginTop={'15px'}>
            <Slider {...settings}>
              {courses.map((course, index) => (
                <Box position={'relative'} paddingTop={'50px'}>
                  <Box className="testimonial-user-avatar">
                    <Image src={profilePic} className="image-cover" />
                  </Box>
                  <Box
                    h="250px"
                    key={index}
                    borderRadius="15px"
                    overflow="hidden"
                    marginTop={5}
                    position={'relative'}
                    className="testimonial-card"
                  >
                    {/* Card Section */}
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                      justifyItems={'center'}
                      p={5}
                      mt={42}
                    >
                      <Heading
                        as="h4"
                        color={'#1f3b64'}
                        fontWeight={700}
                        fontSize={'1rem'}
                      >
                        Ryan Newaman
                      </Heading>

                      <Text size={'sm'} color={'gray'}>
                        Data Analyst at Microsoft
                      </Text>

                      <HStack
                        spacing={'-3'}
                        display={'flex'}
                        alignItems="flex-start"
                        mt={'15px'}
                      >
                        <Icon
                          as={StarIcon}
                          color="yellow.500"
                          boxSize={4}
                          mr={2}
                        />
                        <Icon
                          as={StarIcon}
                          color="yellow.500"
                          boxSize={4}
                          mr={2}
                        />
                        <Icon
                          as={StarIcon}
                          color="yellow.500"
                          boxSize={4}
                          mr={2}
                        />
                        <Icon
                          as={StarIcon}
                          color="yellow.500"
                          boxSize={4}
                          mr={2}
                        />
                      </HStack>

                      <Text mt={'25px'} color={'gray'} textAlign={'center'}>
                        "We're loving it. Rocket LMS is both perfect and highly
                        adaptable."
                      </Text>
                    </Box>

                    <Box className="testimonial-bottom-gradient"></Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Testimonials;
