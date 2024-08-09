import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import firstCourse from '../../assets/course1.jpg';
import secondCourse from '../../assets/course2.jpg';

// importing css
import './home.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { StarIcon } from '@chakra-ui/icons';

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

const FeaturedCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'New Learning Page',
      instructor: 'Robert Ransdell',
      description:
        'Learn step-by-step tips that help you get things done with your virtual team by increasing trust and accountability.',
      rating: '5.0',
      hours: '3:30 Hours',
      date: '1 Mar 2022',
      image: firstCourse,
      button: 'Free',
    },
    {
      title: 'Advanced Strategies',
      instructor: 'Robert Ransdell',
      description:
        'Discover advanced strategies for remote team management that can lead to improved productivity and collaboration.',
      rating: '4.8',
      hours: '2:45 Hours',
      date: '15 Feb 2022',
      image: secondCourse,
      button: 'Subscribe',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    customPaging: function (i) {
      return (
        <CustomDot
          index={i}
          currentSlide={currentSlide}
          onClick={() => setCurrentSlide(i)}
        />
      );
    },
    beforeChange: (current, next) => setCurrentSlide(next),
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <Box p={4}>
      <Heading as="h2" fontSize={'24px'} fontWeight={'bold'} color={'#1f3b64'}>
        Featured Courses
      </Heading>
      <Text mt={'5px'} fontSize={'14px'} color={'#818894'}>
        #Browse featured courses and become skillful
      </Text>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Flex
            w="full"
            h="450px"
            key={index}
            borderRadius="15px"
            overflow="hidden"
          >
            <Box w="full" h="full" position="relative">
              <Image
                src={slide.image}
                alt="Course Image"
                objectFit="cover"
                w="full"
                h="full"
              />

              {/* Card Section */}
              <Box
                maxW="400px"
                borderWidth="1px"
                borderRadius="15px"
                overflow="hidden"
                boxShadow="md"
                align="flex-start"
                p={4}
                position="absolute"
                left={5}
                top={5}
                zIndex={2}
                bgColor={'white'}
              >
                <VStack spacing="4" align={'flex-start'}>
                  <Heading size="md" as="h4">
                    {slide.title}
                  </Heading>

                  <Text fontSize="sm" color="gray.500" textAlign="left">
                    Learn step-by-step tips that help you get things done with
                    your virtual team by increasing trust and accountability. If
                    you manage a virtual team today, then you'll probably
                    continue to do so for the rest of your career.
                  </Text>

                  <HStack
                    spacing={'-3'}
                    display={'flex'}
                    alignItems="flex-start"
                  >
                    <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                    <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                    <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                    <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                    <Text fontSize="sm" color="black" fontWeight="bold">
                      {slide.rating}
                    </Text>
                  </HStack>

                  <Box display={'flex'} alignItems="flex-start">
                    <HStack spacing="4">
                      <Flex align="center">
                        <Icon as={FaClock} mr="2" />
                        <Text fontSize="sm" textAlign="left">
                          3:30 Hours
                        </Text>
                      </Flex>
                      <Flex align="center">
                        <Icon as={FaCalendarAlt} mr="2" />
                        <Text fontSize="sm" textAlign="left">
                          1 Mar 2022
                        </Text>
                      </Flex>
                    </HStack>
                    <Button colorScheme="teal" size="lg" variant="outline">
                      Free
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedCourse;
