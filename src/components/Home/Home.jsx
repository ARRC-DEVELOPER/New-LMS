import React from 'react';
import './home.css';
import teacher from '../../assets/teacher.svg';
import student from '../../assets/student.svg';
import video from '../../assets/video.svg';
import course from '../../assets/course.svg';
import newSec from '../../assets/become_instructor_banner.png';
import certificateBanner from '../../assets/validate_certificates_banner.png';
import meetingBanner from '../../assets/reserve_a_meeting.png';
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
import BecomeAnInstructor from './BecomeAnInstructor';
import QuestionForum from './QuestionForum';
import FindBestInstructor from './FindBestInstructor';
import HomeVideo from './HomeVideo';
import RewardSection from './RewardSection';
import Testimonials from './Testimonials';
import Organization from './Organization';
import BestSellingCourses from './BestSellingCourses';
import FreeCourses from './FreeCourses';
import DiscountedCourses from './DiscountedCourses';
import StoreProducts from './StoreProducts';

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
        <section id="intro-section" className="intro-section">
          <Container maxWidth={'1200px'} mt={"70px"}>
            <Box py={5}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              >
                {cardData.map(item => (
                  <Card
                    key={item.id}
                    title={item.title}
                    count={item.count}
                    description={item.description}
                    imageSrc={item.icon}
                    id={item.id}
                    bgColor={item.bgColor}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Container>
        </section>

        <section id="featured-section" className="featured-section">
          <Container maxWidth={'1200px'}>
            <FeaturedCourse />
          </Container>
        </section>

        <section id="newest-section" className="newest-section">
          <Container maxWidth={'1200px'}>
            <NewestCourse />
          </Container>
        </section>

        <section id="bundles-section" className="bundles-section">
          <Container maxWidth={'1200px'}>
            <LatestBundles />
          </Container>
        </section>

        <section id="upcoming-courses" className="bundles-section">
          <Container maxWidth={'1200px'}>
            <UpcomingCourses />
          </Container>
        </section>

        <section id="best-rated-courses" className="bundles-section">
          <Container maxWidth={'1200px'}>
            <BestRatedCourses />
          </Container>
        </section>

        <section id="trending-categories" className="newest-section">
          <Container maxWidth={'1200px'}>
            <TrendingCategories />
          </Container>
        </section>

        <section id="best-selling-courses" className="bundles-section">
          <Container maxWidth={'1200px'}>
            <BestSellingCourses />
          </Container>
        </section>

        <section id="free-courses" className="bundles-section">
          <Container maxWidth={'1200px'}>
            <FreeCourses />
          </Container>
        </section>

        <section id="become-instructor" className="newest-section">
          <Container maxWidth={'1200px'}>
            <Image src={newSec} />
          </Container>
        </section>

        <section id="discounted-courses">
          <Container maxWidth={'1200px'}>
            <DiscountedCourses />
          </Container>
        </section>

        <section id="store-products" className="bundles-section">
          <Container maxWidth={'1200px'}>
            <StoreProducts />
          </Container>
        </section>

        <section id="become-an-instructor" className="newest-section">
          <Container maxWidth={'1200px'}>
            <BecomeAnInstructor />
          </Container>
        </section>

        <section id="question-forum" className="newest-section">
          <Container maxWidth={'1200px'}>
            <QuestionForum />
          </Container>
        </section>

        <section id="find-best-instructor" className="newest-section">
          <Container maxWidth={'1200px'}>
            <FindBestInstructor />
          </Container>
        </section>

        <section id="home-video">
          <HomeVideo />
        </section>

        <section id="reward-section">
          <Container maxWidth={'1200px'} mb={20}>
            <RewardSection />
          </Container>
        </section>

        <section id="certificate-banner">
          <Container maxWidth={'1200px'} mb={20}>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={10}>
              <Image src={certificateBanner} />
              <Image src={meetingBanner} />
            </Box>
          </Container>
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="organization" className="newest-section">
          <Organization />
        </section>
      </div>
    </section>
  );
};

export default Home;
