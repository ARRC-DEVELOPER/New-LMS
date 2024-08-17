import React, { Fragment, useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Container,
  Portal,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const sectionData = {
  'Skillful Instructors': 'intro-section',
  'Happy Students': 'intro-section',
  'Live Classes': 'intro-section',
  'Video Courses': 'intro-section',
  'Featured Course': 'featured-section',
  'Newest Course': 'newest-section',
  'Latest Bundles': 'bundles-section',
  'Upcoming Courses': 'upcoming-courses',
  'Best Rated Courses': 'best-rated-courses',
  'Trending Categories': 'trending-categories',
  'Best Selling Courses': 'best-selling-courses',
  'Free Courses': 'free-courses',
  'Become An Instructor': 'become-instructor',
  'Discounted Courses': 'discounted-courses',
  'Store Products': 'store-products',
  'Question Forum': 'question-forum',
  'Find Best Instructor': 'find-best-instructor',
  'Home Video': 'home-video',
  'Reward Section': 'reward-section',
  Testimonials: 'testimonials',
  Organization: 'organization',
};

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const sectionId = Object.keys(sectionData).find(title =>
      title.toLowerCase().includes(lowerCaseQuery)
    );

    if (sectionId) {
      document
        .getElementById(sectionData[sectionId])
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Adjust styles based on the screen size
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const searchBarWidth = useBreakpointValue({ base: 'full', md: '200px' });
  const justifyContent = useBreakpointValue({ base: 'center', md: 'space-between' });

  return (
    <Fragment>
      <Box>
        <Flex
          px={{ base: '2', md: '4' }}
          py="2"
          justifyContent="center"
          alignItems="center"
          bg="white"
          shadow="sm"
          direction={flexDirection}
        >
          <Container maxWidth="1200px">
            <Flex
              justifyContent={justifyContent}
              w="full"
              alignItems="center"
              flexWrap="wrap"
              mx="auto" // Center horizontally
            >
              {/* Left Side */}
              <Flex alignItems="center" flexWrap="wrap" justifyContent={'center'}>
                <Box mr={{ base: '0', md: '4' }} mb={{ base: '2', md: '0' }}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant="ghost"
                      onMouseEnter={event => event.currentTarget.focus()}
                    >
                      INR (₹)
                    </MenuButton>
                    <Portal>
                      <MenuList
                        onMouseLeave={event =>
                          event.currentTarget.parentNode.firstChild.blur()
                        }
                        p="2"
                        minW="240px"
                        boxShadow="xl"
                        zIndex="200"
                      >
                        <MenuItem>INR (₹)</MenuItem>
                        <MenuItem>USD ($)</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </Box>

                <Box mr={{ base: '0', md: '4' }} mb={{ base: '2', md: '0' }}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant="ghost"
                      onMouseEnter={event => event.currentTarget.focus()}
                    >
                      English
                    </MenuButton>
                    <Portal>
                      <MenuList
                        onMouseLeave={event =>
                          event.currentTarget.parentNode.firstChild.blur()
                        }
                        p="2"
                        minW="240px"
                        boxShadow="xl"
                        zIndex="200"
                      >
                        <MenuItem>English</MenuItem>
                        <MenuItem>Spanish</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </Box>

                <Box mr={{ base: '0', md: '4' }} mb={{ base: '2', md: '0' }}>
                  <InputGroup>
                    <Input
                      placeholder="Search..."
                      width={searchBarWidth}
                      focusBorderColor="green.400"
                      borderColor="gray.200"
                      borderWidth="0.5px"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Search"
                        icon={<SearchIcon />}
                        size="sm"
                        variant="ghost"
                        onClick={handleSearch}
                      />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>

              {/* Right Side */}
              <Box display="flex" gap={{ base: '10', md: '20' }} alignItems="center">
                <Box display="flex" alignItems="center">
                  <IconButton icon={<FaShoppingCart />} variant="" />
                  <Divider
                    orientation="vertical"
                    height="10"
                    opacity={1}
                    borderColor="gray.400"
                    mx={2}
                    display={{ base: 'none', md: 'block' }}
                  />
                  <IconButton icon={<FaBell />} variant="" />
                </Box>

                <Box>
                  <Link to="/login">
                    <Button mr="2" variant="">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="">Register</Button>
                  </Link>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Header;
