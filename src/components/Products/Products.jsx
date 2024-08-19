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

import '../CategoryPages/Development/development.css';

import { FaShoppingCart } from 'react-icons/fa';

// importing css
import '../CategoryPages/Development/development.css';

// importing images
import backCover from '../../assets/webdev-category_cover.png';

// Import images or use URLs
import firstCourse from '../../assets/Installment.jpg';
import firstInstructor from '../../assets/instructor_profile.png';

import secondCourse from '../../assets/new_live_system.jpg';
import secondInstructor from '../../assets/user-profile2.png';

import thirdCourse from '../../assets/course1.jpg';
import thirdInstructor from '../../assets/user-profile3.png';

import { Link } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';

const Products = () => {
  const [view, setView] = useState('grid');
  const [free, setFree] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [sort, setSort] = useState('');

  const handleViewChange = e => {
    setView(e.target.value);
  };

  const handleFreeChange = e => {
    setFree(e.target.checked);
  };

  const handleDiscountChange = e => {
    setDiscount(e.target.checked);
  };

  const handleFreeShippingChange = e => {
    setFreeShipping(e.target.checked);
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

  const typeFilter = [
    {
      title: 'Type',
      options: [
        { label: 'Virtual', value: 'virtual' },
        { label: 'Physical', value: 'physical' },
      ],
    },

    {
      title: 'Options',
      options: [
        { label: 'Only available products', value: 'available' },
        { label: 'Products with points', value: 'points' },
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
                Products
              </Heading>
              <Text
                className="badge-count"
                color={'white'}
                mt={3}
                rounded={'md'}
                zIndex={10}
              >
                5 Products
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
                      htmlFor="download"
                      fontSize={'0.875rem'}
                      fontWeight={400}
                      lineheight={1.3}
                    >
                      Free Shipping
                    </Text>
                    <Switch
                      isChecked={freeShipping}
                      onChange={handleFreeShippingChange}
                      id="freeShipping"
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
                </Box>
              </HStack>

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
                width={['full', '80%']}
                display={'flex'}
                flexDir={'row'}
                flexWrap={'wrap'}
                gap={5}
              >
                {courses.map((course, index) => (
                  <Box
                    // h="600px"
                    width={['full', '280px']}
                    key={index}
                    borderRadius="15px"
                    overflow="hidden"
                    className="new-course-card"
                  >
                    {/* Card Section */}
                    <Image
                      h={'200px'}
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

                          <Box className="hover-card-action">
                            <Button className="btn-add-product-to-cart">
                              <FaShoppingCart size={'md'} />
                            </Button>
                          </Box>
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

              <Box width={['full', '280px']}>
                {typeFilter.map(filterGroup => (
                  <Box
                    p={4}
                    rounded="md"
                    shadow="md"
                    border="1px"
                    borderColor="gray.300"
                    w="full"
                    maxW="md"
                    marginBottom={5}
                    key={filterGroup.title}
                  >
                    <VStack spacing={4}>
                      <FormControl>
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
                ))}

                <Box
                  p={4}
                  rounded="md"
                  shadow="md"
                  border="1px"
                  borderColor="gray.300"
                  w="full"
                  maxW="md"
                  marginBottom={5}
                >
                  <VStack align={'self-start'} justifyContent={'center'}>
                    <Text fontSize={'16px'} color={'#171347'} fontWeight={700}>
                      Catagories
                    </Text>
                    <div className="greenbar"></div>

                    <Button textAlign={'left'} m={0} p={0} variant={''}>
                      Design Tools
                    </Button>
                    <Button textAlign={'left'} mt={'-3'} p={0} variant={''}>
                      Science Tools
                    </Button>
                    <Button textAlign={'left'} mt={'-3'} p={0} variant={''}>
                      {' '}
                      e-books
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

export default Products;
