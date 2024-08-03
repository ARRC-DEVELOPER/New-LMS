import React from 'react';

// importing css
import './home.css';

// importing images
import teacher from '../../assets/teacher.svg';
import student from '../../assets/student.svg';
import video from '../../assets/video.svg';
import course from '../../assets/course.svg';
import newSec from "../../assets/become_instructor_banner.png";

import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
} from '@chakra-ui/react';
import FeaturedCourse from './FeaturedCourse';
import NewestCourse from './NewestCourse';
import LatestBundles from './LatestBundles';
import UpcomingCourses from './UpcomingCourses';
import BestRatedCourses from './BestRatedCourses';
import TrendingCategories from './TrendingCategories';

// Card Component
const Card = ({ title, count, imageSrc, description, bgColor }) => {
  return (
    <Box className="introCard" p={5} align="center">
      <Image
        borderRadius={'25px'}
        src={imageSrc}
        alt={title}
        boxSize="80px"
        p={2}
        m={4}
        backgroundImage={bgColor}
      />
      <Text fontSize="3xl" fontWeight="bold">
        {count}
      </Text>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text fontSize="sm" mt={2}>
        {description}
      </Text>
    </Box>
  );
};

const Home = () => {
  const cardData = [
    {
      id: 1,
      title: 'Skillful Instructors',
      count: 10,
      description: 'Start learning from experienced instructors.',
      icon: teacher,
      bgColor: 'linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%)',
    },
    {
      id: 2,
      title: 'Happy Students',
      count: 10,
      description: 'Enrolled in our courses and improved their skills.',
      icon: student,
      bgColor: 'linear-gradient(135deg, #F761A1 10%, #8C1BAB 100%)',
    },
    {
      id: 3,
      title: 'Live Classes',
      count: 10,
      description: 'Improve your skills using live knowledge flow.',
      icon: video,
      bgColor: 'linear-gradient(135deg, #11c99c, #00e31d)',
    },
    {
      id: 4,
      title: 'Video Courses',
      count: 10,
      description: 'Learn without any geographical & time limitations.',
      icon: course,
      bgColor: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    },
  ];
  return (
    <section className="home">
      <div className="container">
        <section className="intro-section">
          <Container maxWidth={'1200px'}>
            <Box py={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {cardData.map(item => (
                  <Card
                    key={item._id}
                    title={item.title}
                    count={item.count}
                    description={item.description}
                    imageSrc={item.icon}
                    id={item._id}
                    bgColor={item.bgColor}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Container>
        </section>

        <section className="featured-section">
          <Container maxWidth={'1200px'}>
            <FeaturedCourse />
          </Container>
        </section>

        <section className="newest-section">
          <Container maxWidth={'1200px'}>
            <NewestCourse />
          </Container>
        </section>

        <section className="bundles-section">
          <Container maxWidth={'1200px'}>
            <LatestBundles />
          </Container>
        </section>

        <section className="bundles-section">
          <Container maxWidth={'1200px'}>
            <UpcomingCourses />
          </Container>
        </section>

        <section className="bundles-section">
          <Container maxWidth={'1200px'}>
            <BestRatedCourses />
          </Container>
        </section>

        <section className="newest-section">
          <Container maxWidth={'1200px'}>
            <TrendingCategories />
          </Container>
        </section>

        <section className="newest-section">
          <Container maxWidth={'1200px'}>
            <Image src={newSec} />
          </Container>
        </section>
      </div>
    </section>
  );
};

export default Home;
