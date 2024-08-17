import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';
import Slider from 'react-slick';

// importing css
import './home.css';

// importing images
import teacher from '../../assets/teacher.svg';
import student from '../../assets/student.svg';
import video from '../../assets/video.svg';
import course from '../../assets/course.svg';

const Card = ({ title, course=0, imageSrc, description, bgColor }) => {
  return (
    <Box className="introCard" p={5} align="center" height={"290px"} mt={'70px'}>
      <Image
        borderRadius={'50%'}
        src={imageSrc}
        alt={title}
        width={'120px'}
        height={'120px'}
        p={2}
        m={4}
        backgroundImage={bgColor}
      />
      <Heading as="h4" fontSize={"16px"} fontWeight={"bold"}>
        {title}
      </Heading>
      <Text mt={2} mb={2} fontSize={"12px"}>
        {description}
      </Text>
      <span className={"organization-course-count"} >
        {course} Courses
      </span>
    </Box>
  );
};

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

  const cardData = [
    {
      id: 1,
      title: 'Light Moon',
      course: 1,
      description: 'Building better proffessionals',
      icon: teacher,
      bgColor: 'linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%)',
    },
    {
      id: 2,
      title: 'Happy Students',
      count: 10,
      description: 'Building better proffessionals',
      icon: student,
      bgColor: 'linear-gradient(135deg, #F761A1 10%, #8C1BAB 100%)',
    },
    {
      id: 3,
      title: 'Live Classes',
      count: 10,
      description: 'Building better proffessionals',
      icon: video,
      bgColor: 'linear-gradient(135deg, #11c99c, #00e31d)',
    },
    {
      id: 4,
      title: 'Video Courses',
      count: 10,
      description: 'Building better proffessionals',
      icon: course,
      bgColor: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    },
  ];

  //   Conditional Dot rendering
  const initialCards = 4;
  const numDots = Math.ceil((cardData.length - initialCards + 1) / 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
    <Fragment>
      <Container maxW={'1200px'}>
        <Box p={4}>
          <Box
            w={'full'}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
          >
            <Heading
              as="h2"
              fontSize={'24px'}
              fontWeight={'bold'}
              color={'#1f3b64'}
            >
              Organizations
            </Heading>
            <Text mt={'5px'} fontSize={'14px'} color={'#818894'}>
              #Greatest education organizations are here to help you
            </Text>
          </Box>

          <Box>
            <Slider {...settings}>
              {cardData.map(item => (
                <Card
                  key={item._id}
                  title={item.title}
                  course={item.course}
                  description={item.description}
                  imageSrc={item.icon}
                  id={item._id}
                  bgColor={item.bgColor}
                />
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Testimonials;
