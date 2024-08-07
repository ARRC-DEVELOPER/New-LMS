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
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Search"
                        icon={<SearchIcon />}
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          /* logic to handle search */
                        }}
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
