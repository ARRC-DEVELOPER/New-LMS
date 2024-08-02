import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import firstCourse from '../../assets/course1.jpg';
import secondCourse from '../../assets/course2.jpg';

const FeaturedCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const slides = [
    {
      title: 'New Learning Page',
      instructor: 'Robert Ransdell',
      description:
        'Learn step-by-step tips that help you get things done with your virtual team by increasing trust and accountability.',
      rating: 5.0,
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
      rating: 4.8,
      hours: '2:45 Hours',
      date: '15 Feb 2022',
      image: secondCourse,
      button: 'Subscribe',
    },
  ];

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Featured Courses
      </Heading>
      <Text mb={4}>#Browse featured courses and become skillful</Text>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} position="relative">
            <Image
              src={slide.image}
              alt="Course Image"
              objectFit="cover"
              w="full"
              h="450px"
            />
            <Box
              bg="rgba(0, 0, 0, 0.7)"
              position="absolute"
              bottom={4}
              right={4}
              zIndex={2}
              p={4}
              w="full"
            >
              <VStack spacing={2} align="flex-start">
                <Heading as="h3" size="sm" color="white">
                  {slide.title}
                </Heading>
                <Text fontSize="xs" color="white">
                  {slide.instructor}
                </Text>
                <Text fontSize="xs" color="white">
                  {slide.description}
                </Text>
              </VStack>
              <Text fontSize="xs" color="white">
                {slide.hours} | {slide.date}
              </Text>
              <Button
                colorScheme="green"
                variant="solid"
                size="sm"
                rounded="full"
                mt={2}
              >
                {slide.button}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedCourse;
