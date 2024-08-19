import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  Switch,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

import '../Development/development.css';

import { FaCalendarAlt, FaClock, FaList, FaThLarge } from 'react-icons/fa';

// importing images
import backCover from '../../../assets/webdev-category_cover.png';

// Import images or use URLs
import firstCourse from '../../../assets/Installment.jpg';
import firstInstructor from '../../../assets/instructor_profile.png';

import secondCourse from '../../../assets/new_live_system.jpg';
import secondInstructor from '../../../assets/user-profile2.png';

import { Link } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';

const BusinessStrategy = () => {
  const [view, setView] = useState('grid');
  const [upcoming, setUpcoming] = useState(false);
  const [free, setFree] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [download, setDownload] = useState(false);
  const [sort, setSort] = useState('');

  const handleViewChange = e => {
    setView(e.target.value);
  };

  const handleUpcomingChange = e => {
    setUpcoming(e.target.checked);
  };

  const handleFreeChange = e => {
    setFree(e.target.checked);
  };

  const handleDiscountChange = e => {
    setDiscount(e.target.checked);
  };

  const handleDownloadChange = e => {
    setDownload(e.target.checked);
  };

  const handleSortChange = e => {
    setSort(e.target.value);
  };

  // Right Side Filter
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = filter => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filterOptions = [
    {
      title: 'Type',
      options: [
        { label: 'Live Class', value: 'live_class' },
        { label: 'Course', value: 'course' },
        { label: 'Text Course', value: 'text_course' },
      ],
    },
    {
      title: 'Level',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Expert', value: 'expert' },
      ],
    },
    {
      title: 'Language',
      options: [
        { label: 'English', value: 'english' },
        { label: 'Español', value: 'espanol' },
        { label: 'Portugues', value: 'portugues' },
        { label: 'हिन्', value: 'hindi' },
        { label: 'العربية', value: 'arabic' },
      ],
    },
    {
      title: 'Topic',
      options: [
        { label: 'Android Development', value: 'android' },
        { label: 'iOS Development', value: 'ios' },
        { label: 'Google Flutter', value: 'flutter' },
        { label: 'React Native Kotlin', value: 'react_native' },
      ],
    },
    {
      title: 'More options',
      options: [
        { label: 'Show only bundles', value: 'bundles' },
        { label: 'Show only subscribe', value: 'subscribe' },
        {
          label: 'Show only certificate included',
          value: 'certificate_included',
        },
        { label: 'Show only courses with quiz', value: 'with_quiz' },
        { label: 'Show only featured courses', value: 'featured' },
      ],
    },
  ];

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
      catagory: 'Communication',
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
  ];

  // Responsive values
  const containerMaxWidth = useBreakpointValue({ base: '100%', md: '1200px' });
  const inputPadding = useBreakpointValue({ base: '6', md: '8' });
  const headingFontSize = useBreakpointValue({
    base: '1.5rem',
    md: '1.875rem',
  });
  const searchWidth = useBreakpointValue({ base: '100%', md: '600px' });
  const filterBarSpacing = useBreakpointValue({ base: 2, md: 8 });
  const courseCardGap = useBreakpointValue({ base: 4, md: 8 });

  return (
    <section className="webdev">
      <div className="container">
        <section className="site-top-banner">
          <Image src={backCover} className="img-cover" />
          <Container maxWidth={containerMaxWidth} h={'530px'} zIndex={100}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'100%'}
            >
              <Heading
                as={'h1'}
                fontSize={headingFontSize}
                color={'white'}
                zIndex={10}
              >
                Business Strategy
              </Heading>
              <Text
                className="badge-count"
                color={'white'}
                mt={3}
                rounded={'md'}
                zIndex={10}
              >
                3 Courses
              </Text>
              <HStack
                spacing={filterBarSpacing}
                marginTop={20}
                position="relative"
                w={searchWidth}
              >
                <Input
                  w="full"
                  padding={inputPadding}
                  bgColor="white"
                  borderRadius="full"
                  placeholder="Search courses, instructors and organizations..."
                  pr="120px"
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

        <section className="filterbar">
          <Container maxWidth={containerMaxWidth} mt={10}>
            <Flex
              className="topFilters"
              rounded="md"
              alignItems={['start', 'center']}
              justifyContent="space-between"
              direction={['column', 'row']}
              gap={5}
            >
              <HStack spacing={filterBarSpacing} marginLeft={2}>
                {/* <Input
                  type="radio"
                  name="view"
                  value="grid"
                  checked={view === 'grid'}
                  onChange={handleViewChange}
                /> */}
                <Icon as={FaThLarge} fontSize="lg" />

                {/* <Input
                  type="radio"
                  name="view"
                  value="list"
                  checked={view === 'list'}
                  onChange={handleViewChange}
                /> */}
                <Icon as={FaList} fontSize="lg" />
              </HStack>

              <HStack spacing={filterBarSpacing}>
                <Box display={'flex'} flexDirection={['column', 'row']} gap={5}>
                  <Box
                    display={'flex'}
                    flexDir={'row'}
                    alignContent={'center'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Text
                      fontSize={'0.875rem'}
                      fontWeight={400}
                      lineheight={1.3}
                      htmlFor="upcoming"
                    >
                      Upcoming
                    </Text>
                    <Switch
                      isChecked={upcoming}
                      onChange={handleUpcomingChange}
                      id="upcoming"
                    />
                  </Box>

                  <Box
                    display={'flex'}
                    flexDir={'row'}
                    alignContent={'center'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Text
                      htmlFor="free"
                      fontSize={'0.875rem'}
                      fontWeight={400}
                      lineheight={1.3}
                    >
                      Free
                    </Text>
                    <Switch
                      isChecked={free}
                      onChange={handleFreeChange}
                      id="free"
                    />
                  </Box>

                  <Box
                    display={'flex'}
                    flexDir={'row'}
                    alignContent={'center'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Text
                      fontSize={'0.875rem'}
                      fontWeight={400}
                      lineheight={1.3}
                      htmlFor="discount"
                    >
                      Discount
                    </Text>
                    <Switch
                      isChecked={discount}
                      onChange={handleDiscountChange}
                      id="discount"
                    />
                  </Box>

                  <Box
                    display={'flex'}
                    flexDir={'row'}
                    alignContent={'center'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Text
                      htmlFor="download"
                      fontSize={'0.875rem'}
                      fontWeight={400}
                      lineheight={1.3}
                    >
                      Download
                    </Text>
                    <Switch
                      isChecked={download}
                      onChange={handleDownloadChange}
                      id="download"
                    />
                  </Box>

                  <Box width={['full', '15rem']} marginLeft={['0px', '2rem']}>
                    <Select
                      placeholder="Sort by"
                      value={sort}
                      onChange={handleSortChange}
                      fontSize={'0.875rem'}
                      lineHeight={1.4}
                      colorScheme="green"
                    >
                      <option value="">All</option>
                      <option value="newest">Newest</option>
                      <option value="expensive">Highest Price</option>
                      <option value="inexpensive">Lowest Price</option>
                      <option value="bestsellers">Bestsellers</option>
                      <option value="best_rates">Best Rated</option>
                    </Select>
                  </Box>
                </Box>
              </HStack>
            </Flex>
          </Container>
        </section>

        <section className={'categorybody'}>
          <Container maxWidth={containerMaxWidth} mt={10}>
            <Box
              display={'flex'}
              flexDirection={useBreakpointValue({ base: 'column', md: 'row' })}
              gap={courseCardGap}
            >
              {/* Courses Section */}
              <Box
                width={['full', '70%']}
                display={'flex'}
                flexDir={'row'}
                flexWrap={'wrap'}
                gap={8}
              >
                {courses.map((course, index) => (
                  <Box
                    h="600px"
                    width={['full', '46%']}
                    key={index}
                    borderRadius="15px"
                    overflow="hidden"
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
                          <Image
                            className="avatar"
                            src={course.instructorProfile}
                          />
                          <Text
                            fontSize={14}
                            fontWeight={500}
                            color={'#818894'}
                          >
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
                            style={{
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            }}
                          >
                            {course.catagory}
                          </Link>
                        </Text>

                        <HStack
                          spacing={'-3'}
                          display={'flex'}
                          alignItems="flex-start"
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
              </Box>

              <Box width={['full', '30%']}>
                <Box
                  p={4}
                  rounded="md"
                  shadow="md"
                  border="1px"
                  borderColor="gray.300"
                  w="full"
                  maxW="md"
                >
                  <VStack spacing={4}>
                    {filterOptions.map(filterGroup => (
                      <FormControl key={filterGroup.title}>
                        <FormLabel
                          fontSize={'16px'}
                          color={'#171347'}
                          fontWeight={700}
                        >
                          {filterGroup.title}
                        </FormLabel>
                        <div className="greenbar"></div>
                        {filterGroup.options.map(option => (
                          <HStack key={option.value} mt={5}>
                            <Checkbox
                              onChange={() => handleFilterChange(option.value)}
                              isChecked={selectedFilters.includes(option.value)}
                              value={option.value}
                            >
                              <Text>{option.label}</Text>
                            </Checkbox>
                          </HStack>
                        ))}
                      </FormControl>
                    ))}
                    <Button
                      variant="solid"
                      colorScheme="green"
                      onClick={() => console.log(selectedFilters)}
                      width={'full'}
                    >
                      Filter Items
                    </Button>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Container>
        </section>
      </div>
    </section>
  );
};

export default BusinessStrategy;
