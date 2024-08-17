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
  Image,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images or use URLs
import firstCourse from '../../assets/Installment.jpg';
import firstInstructor from '../../assets/instructor_profile.png';

import secondCourse from '../../assets/new_live_system.jpg';
import secondInstructor from '../../assets/user-profile2.png';

import thirdCourse from '../../assets/course1.jpg';
import thirdInstructor from '../../assets/user-profile3.png';

// importing css
import './home.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

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

const DiscountedCourses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: 'New Learning Page',
      instructor: 'Jessica Wray',
      instructorProfile: firstInstructor,
      rating: '5.0',
      hours: '3:30 Hours',
      date: '1 Mar 2022',
      image: firstCourse,
      price: 'Free',
      catagory: 'Business Strategy',
    },
    {
      title: 'Advanced Strategies',
      instructor: 'Robert Ransdell',
      instructorProfile: secondInstructor,
      rating: '4.8',
      hours: '2:45 Hours',
      date: '15 Feb 2022',
      image: secondCourse,
      price: 'Subscribe',
      catagory: 'Communication',
    },
    {
      title: 'Installment and Secure Host',
      instructor: 'Jessica Wray',
      instructorProfile: thirdInstructor,
      rating: '5.0',
      hours: '1:30 Hours',
      date: '15 Mar 2023',
      image: thirdCourse,
      price: '₹ 8000',
      catagory: 'Management',
    },
    {
      title: 'Fourth Course',
      instructor: 'Another Instructor',
      instructorProfile: secondInstructor,
      rating: '4.5',
      hours: '2:00 Hours',
      date: '10 Apr 2022',
      image: secondCourse,
      price: '₹ 8000',
      catagory: 'Communication',
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
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
      <Heading as="h2" fontSize={'24px'} fontWeight={'bold'} color={'#1f3b64'}>
        Discounted Courses
      </Heading>
      <Text mt={'5px'} fontSize={'14px'} color={'#818894'}>
        #Get courses at the latest price
      </Text>

      <Slider {...settings}>
        {courses.map((course, index) => (
          <Box
            // h="600px"
            key={index}
            borderRadius="15px"
            overflow="hidden"
            marginTop={5}
            className="new-course-card"
          >
            {/* Card Section */}
            <Image
              h={'300px'}
              w={'full'}
              objectFit={'cover'}
              src={course.image}
            />
            <Box
              w={'full'}
              h={'full'}
              overflow="hidden"
              align="flex-start"
              p={4}
              zIndex={2}
            >
              <VStack spacing="4" align={'flex-start'}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'1'}
                >
                  <Image className="avatar" src={course.instructorProfile} />
                  <Text fontSize={14} fontWeight={500} color={'#818894'}>
                    {course.instructor}
                  </Text>
                </Box>
                <Heading
                  color={'#171347'}
                  fontWeight={'bold'}
                  fontSize={16}
                  as="h3"
                >
                  {course.title}
                </Heading>

                <Text fontSize={14} mt={6} textAlign="left">
                  in{' '}
                  <Link
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    {course.catagory}
                  </Link>
                </Text>

                <HStack spacing={'-3'} display={'flex'} alignItems="flex-start">
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Text
                    ml={2}
                    bgColor={'#43d477'}
                    px={'0.5rem'}
                    borderRadius={'0.3125rem'}
                    fontSize={'0.75rem'}
                    color={'white'}
                  >
                    {course.rating}
                  </Text>
                </HStack>

                <Box w={'full'}>
                  <HStack justifyContent={'space-between'}>
                    <Flex align="center">
                      <Icon as={FaClock} mr="2" />
                      <Text fontSize="sm" textAlign="left">
                        {course.hours}
                      </Text>
                    </Flex>

                    <Box className="verticle-line"></Box>

                    <Flex align="center">
                      <Icon as={FaCalendarAlt} mr="2" />
                      <Text fontSize="sm" textAlign="left">
                        {course.date}
                      </Text>
                    </Flex>
                  </HStack>
                </Box>
                <Box
                  mt={2}
                  fontSize={'20px'}
                  color={'#43d477'}
                  fontWeight={800}
                >
                  {course.price}
                </Box>
              </VStack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default DiscountedCourses;
