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
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { Fragment, useState } from 'react';
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
  'Testimonials': 'testimonials',
  'Organization': 'organization',
};

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const sectionId = Object.keys(sectionData).find(title =>
      title.toLowerCase().includes(lowerCaseQuery)
    );

    if (sectionId) {
      document.getElementById(sectionData[sectionId])?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fragment>
      <Box>
        <Flex
          px="4"
          py="2"
          justifyContent="center"
          alignItems="center"
          bg="white"
          shadow="sm"
        >
          <Container maxWidth="1200px">
            <Flex justifyContent="space-between" w="full" alignItems="center">
              <Flex alignItems="center">
                <Box mr="4">
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      onMouseEnter={event => event.currentTarget.focus()}
                      variant={'ghost'}
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

                <Box mr="4">
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      onMouseEnter={event => event.currentTarget.focus()}
                      variant={'ghost'}
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

                <Box mr="4">
                  <InputGroup>
                    <Input
                      placeholder="Search..."
                      maxWidth="200px"
                      focusBorderColor="green.400"
                      borderColor="gray.200"
                      borderWidth="0.5px"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
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

              <Box display={'flex'} gap={'20'} alignItems={'center'}>
                <Box display={'flex'} alignItems={'center'}>
                  <IconButton icon={<FaShoppingCart />} variant="" />
                  <Divider
                    orientation="vertical"
                    height="10"
                    opacity={1}
                    borderColor="gray.400"
                    mx={2}
                  />
                  <IconButton icon={<FaBell />} variant="" />
                </Box>

                <Box>
                  <Link to={'/login'}>
                    <Button mr="2" variant={''}>
                      Login
                    </Button>
                  </Link>
                  <Link to={'/signup'}>
                    <Button variant={''}>Register</Button>
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
