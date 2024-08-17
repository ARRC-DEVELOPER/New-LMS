import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import briefcase from '../../assets/briefcase.png';
import bulb from '../../assets/bulb.png';
import family from '../../assets/family.png';
import muscle from '../../assets/muscle.png';
import connection from '../../assets/connection.png';
import palette from '../../assets/palette.png';

// importing css
import './home.css';

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

const TrendingCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      icon: briefcase,
      title: 'Management',
      courses: 2,
      bgColor: '#7367f0',
    },
    {
      icon: bulb,
      title: 'Business Strategy',
      courses: 2,
      bgColor: '#ad82e0',
    },
    {
      icon: family,
      title: 'Lifestyle',
      courses: 3,
      bgColor: '#ff7c59',
    },
    {
      icon: muscle,
      title: 'Health & Fitness',
      courses: 1,
      bgColor: '#28c76f',
    },
    {
      icon: connection,
      title: 'Science',
      courses: 1,
      bgColor: '#ea5455',
    },
    {
      icon: palette,
      title: 'Design',
      courses: 1,
      bgColor: '#45c0f9',
    },
  ];

  //   Conditional Dot rendering
  const initialCards = 6;
  const numDots = Math.ceil((categories.length - initialCards + 1) / 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
    <Box p={4}>
      <Heading
        as="h2"
        color={'#1f3b64'}
        size="lg"
        mb={4}
        fontSize={'24px'}
        fontWeight={'bold'}
        lineHeight={1.5}
      >
        Trending Categories
      </Heading>
      <Text mb={4} mt={-2} color={'#818894'} fontSize={'14px'} lineHeight={1.5}>
        #Browse trending & popular learning topics
      </Text>

      <Slider {...settings}>
        {categories.map((cat, index) => (
          <Box
            key={index}
            h="210px"
            w="214.5px"
            marginTop={5}
            overflow="hidden"
            textAlign="center"
            className="trending-course-card"
          >
            <Box
              h="150px"
              borderRadius={'15px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              w={'full'}
              style={{ backgroundColor: cat.bgColor }}
            >
              <Image src={cat.icon} alt={cat.title} boxSize="90px" />
            </Box>

            <Text className="trending-count">
              {cat.courses} Course{cat.courses > 1 ? 's' : ''}
            </Text>

            <Box>
              <Heading as="h5" size="sm">
                {cat.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TrendingCategories;
