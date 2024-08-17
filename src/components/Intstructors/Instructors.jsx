import React, { Fragment, useState } from 'react';
import InstructorFinder from './InstructorFinder';

// importing css
import './instructors.css';
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
  Select,
  Switch,
  Text,
  VStack,
  Tooltip,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import { Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const Instructors = ({ instructors, badgeList }) => {
  // FilterBar
  const [view, setView] = useState('grid');
  const [availability, setAvailability] = useState(false);
  const [freeMeetings, setFreeMeetings] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [sort, setSort] = useState('');

  const handleViewChange = e => {
    setView(e.target.value);
  };

  const handleAvailabilityChange = e => {
    setAvailability(e.target.checked);
  };

  const handleDiscountChange = e => {
    setDiscount(e.target.checked);
  };

  const handleFreeMeetingsChange = e => {
    setFreeMeetings(e.target.checked);
  };

  const handleSortChange = e => {
    setSort(e.target.value);
  };

  // left Side Filter
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

  return (
    <div className="instructors">
      <div className="container">
        <section className="instructors-map">
          <InstructorFinder instructors={instructors} />
        </section>

        <section className="filterbar">
          <Container maxWidth={'1200px'} mt={10}>
            <Flex
              className="topFilters"
              rounded="md"
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack spacing={8}>
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
                    Available for Meetings
                  </Text>
                  <Switch
                    isChecked={availability}
                    onChange={handleAvailabilityChange}
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
                    Free Meetings
                  </Text>
                  <Switch
                    isChecked={freeMeetings}
                    onChange={handleFreeMeetingsChange}
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
              </HStack>

              <Box width={'15rem'} marginLeft={'2rem'}>
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

        <section className={'instructorbody'}>
          <Container maxWidth={'1200px'} mt={10}>
            <Box display={'flex'} gap={8}>
              {/* Right FilterBar */}
              <Box width={'30%'}>
                <FilterBar
                  filterOptions={filterOptions}
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange}
                />
              </Box>

              {/* Instructor info Section */}
              <Box
                width={'70%'}
                display={'flex'}
                flexDir={'row'}
                flexWrap={'wrap'}
                gap={8}
              >
                <InstructorData
                  instructors={instructors}
                  badgeList={badgeList}
                />
              </Box>
            </Box>
          </Container>
        </section>
      </div>
    </div>
  );
};

const FilterBar = ({ filterOptions, selectedFilters, handleFilterChange }) => {
  return (
    <Fragment>
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
              <FormLabel fontSize={'16px'} color={'#171347'} fontWeight={700}>
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
    </Fragment>
  );
};

const InstructorData = ({ instructors, badgeList }) => {
  const navigate = useNavigate();

  const handleProfileClick = id => {
    navigate(`/instructor/profile/${id}`);
  };

  return (
    <Fragment>
      {instructors.map((instructor, index) => (
        <Box
          key={index}
          borderRadius="15px"
          overflow="hidden"
          width={'full'}
          display={'flex'}
          className="new-course-card"
          py={'25px'}
          cursor={'pointer'}
          onClick={() => handleProfileClick(instructor._id)}
        >
          {/* Card Section */}
          <Box width={'65%'} borderRight={'1px solid #f1f1f1'}>
            <HStack px={'15px'} alignItems={'flex-start'}>
              <Image className="instructor-avatar" src={instructor.iconUrl} />
              <Box px={'15px'}>
                <Heading
                  as={'h3'}
                  fontSize={'1rem'}
                  fontWeight={700}
                  color={'#1f3b64'}
                >
                  {instructor.name}
                </Heading>

                <Text display={'block'} color={'gray'} fontSize={'0.75rem'}>
                  {instructor.profile_headline}
                </Text>

                <Box>
                  {instructor.skills &&
                    instructor.skills.map((skill, index) => {
                      return (
                        <Text
                          key={index}
                          display={'inline-block'}
                          mr={2}
                          fontSize={'0.875rem'}
                          mt={'5px'}
                          color={'gray'}
                        >
                          {skill}
                        </Text>
                      );
                    })}
                </Box>

                <Text fontSize={'0.875rem'} color={'gray'} mt={'10px'}>
                  {instructor.about && instructor.about.slice(0, 200)} ...
                </Text>
              </Box>
            </HStack>
          </Box>

          <Box
            width={'35%'}
            h={'full'}
            overflow="hidden"
            align="flex-start"
            px={'15px'}
            zIndex={2}
            paddingRight={'30px'}
          >
            <VStack spacing="4" align={'flex-start'}>
              <Box display={'flex'} alignItems={'center'}>
                <Text fontWeight={700} fontSize={'1.25rem'} color={'#43d477'}>
                  ₹{instructor.charges}
                </Text>
                <Text fontWeight={500} fontSize={'0.875rem'} color={'gray'}>
                  /hour
                </Text>
              </Box>

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
                  {instructor.rating}
                </Text>
              </HStack>

              <Flex align="center">
                <Icon as={FaClock} mr="2" />
                <Text
                  fontSize={'0.875rem'}
                  fontWeight={500}
                  color={'darkblue'}
                  ml={'10px'}
                >
                  {instructor.total_hour_tutor
                    ? instructor.total_hour_tutor
                    : 0}{' '}
                  Hours Tutoring
                </Text>
              </Flex>

              <Box display={'flex'} flexWrap={'wrap'} gap={5}>
                {badgeList.map(
                  (badge, index) =>
                    instructor.reward_badges[badge.key] && (
                      <Tooltip key={index} label={badge.label} fontSize="md">
                        <Image
                          cursor={'pointer'}
                          src={badge.src}
                          className="instructor-badges"
                        />
                      </Tooltip>
                    )
                )}
              </Box>
            </VStack>
          </Box>
        </Box>
      ))}
    </Fragment>
  );
};

export default Instructors;
