import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images or use URLs
import firstCourse from '../../assets/course1.jpg';
import secondCourse from '../../assets/course2.jpg';
// import thirdCourse from '../../assets/course3.jpg';
// import fourthCourse from '../../assets/course4.jpg'; // assuming you have a fourth image

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

const NewestCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: 'New Learning Page',
      instructor: 'Robert Ransdell',
      rating: '5.0',
      hours: '3:30 Hours',
      date: '1 Mar 2022',
      image: firstCourse,
      price: 'Free',
    },
    {
      title: 'Advanced Strategies',
      instructor: 'Robert Ransdell',
      rating: '4.8',
      hours: '2:45 Hours',
      date: '15 Feb 2022',
      image: secondCourse,
      price: 'Subscribe',
    },
    {
      title: 'Installment and Secure Host',
      instructor: 'Jessica Wray',
      rating: '5.0',
      hours: '1:30 Hours',
      date: '15 Mar 2023',
      image: secondCourse,
      price: '₹ 8000',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      image: secondCourse,
      price: '₹ 8000',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      image: secondCourse,
      price: '₹ 8000',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      image: secondCourse,
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
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Newest Courses
      </Heading>
      <Text mb={4}>#Recently published courses</Text>

      <Slider {...settings}>
        {courses.map((course, index) => (
          <Box
            h="450px"
            key={index}
            borderRadius="15px"
            overflow="hidden"
            marginTop={5}
            className="new-course-card"
          >
            {/* Card Section */}
            <Box
              w={'full'}
              h={'full'}
              overflow="hidden"
              align="flex-start"
              p={4}
              zIndex={2}
            >
              <VStack spacing="4" align={'flex-start'}>
                <Heading size="md" as="h4">
                  {course.title}
                </Heading>

                <Text fontSize="sm" color="gray.500" textAlign="left">
                  {course.description}
                </Text>

                <HStack spacing={'-3'} display={'flex'} alignItems="flex-start">
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Text fontSize="sm" color="black" fontWeight="bold">
                    {course.rating}
                  </Text>
                </HStack>

                <Box display={'flex'} alignItems="flex-start">
                  <HStack spacing="4">
                    <Flex align="center">
                      <Icon as={FaClock} mr="2" />
                      <Text fontSize="sm" textAlign="left">
                        {course.hours}
                      </Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaCalendarAlt} mr="2" />
                      <Text fontSize="sm" textAlign="left">
                        {course.date}
                      </Text>
                    </Flex>
                  </HStack>
                  <Button colorScheme="teal" size="lg" variant="outline">
                    {course.price}
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NewestCourse;
