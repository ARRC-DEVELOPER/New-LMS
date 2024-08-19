import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  FaBars,
  FaCode,
  FaBriefcase,
  FaChartLine,
  FaHeartbeat,
  FaGraduationCap,
  FaPalette,
  FaChevronDown,
} from 'react-icons/fa';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleLanguageChange = language => {
    console.log(selectedLanguage);
    setSelectedLanguage(language);
  };

  return (
    <Box
      as="header"
      width="100%"
      bg="white"
      shadow="md"
      mt={'1'}
      position={'sticky'}
      zIndex="100"
      top={0}
      left={0}
      right={0}
      p={4}
    >
      <Container maxWidth="1200px">
        <Flex alignItems="center" justifyContent="space-between">
          {/* Drawer Button for Mobile */}
          <IconButton
            textAlign={'center'}
            icon={<RiMenu5Fill />}
            aria-label="Open Menu"
            onClick={onOpen}
            display={{ base: 'flex', md: 'none' }}
          />

          {/* Drawer Component */}
          <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth={'1px'}>LEARN HUB</DrawerHeader>
              <DrawerBody>
                <VStack alignItems={'flex-start'} spacing={'4'}>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<FaBars />}
                      variant="outline"
                    />
                    <MenuList>
                      <Menu>
                        <MenuButton
                          as={Button}
                          leftIcon={<FaCode />}
                          rightIcon={<FaChevronDown />}
                          variant=""
                        >
                          Development
                        </MenuButton>
                        <MenuList className="submenu">
                          <Link onClick={onClose} to="/web-development">
                            <MenuItem>Web Development</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/game-development">
                            <MenuItem>Game Development</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/mobile-development">
                            <MenuItem>Mobile Development</MenuItem>
                          </Link>
                        </MenuList>
                      </Menu>

                      <br />

                      <Menu>
                        <MenuButton
                          as={Button}
                          leftIcon={<FaBriefcase />}
                          rightIcon={<FaChevronDown />}
                          variant=""
                        >
                          Business
                        </MenuButton>
                        <MenuList className="submenu">
                          <Link onClick={onClose} to="/management">
                            <MenuItem>Management</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/communication">
                            <MenuItem>Communication</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/business-strategy">
                            <MenuItem>Business Strategy</MenuItem>
                          </Link>
                        </MenuList>
                      </Menu>

                      <Link onClick={onClose} to="/marketing">
                        <MenuItem icon={<FaChartLine />} as="a" href="#">
                          Marketing
                        </MenuItem>
                      </Link>

                      <Menu>
                        <MenuButton
                          as={Button}
                          leftIcon={<FaHeartbeat />}
                          rightIcon={<FaChevronDown />}
                          variant=""
                        >
                          Life Style
                        </MenuButton>
                        <MenuList className="submenu">
                          <Link onClick={onClose} to="/life-style">
                            <MenuItem>Life Style</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/beauty-makeup">
                            <MenuItem>Beauty & Makeup</MenuItem>
                          </Link>
                        </MenuList>
                      </Menu>

                      <br />

                      <Menu>
                        <MenuButton
                          as={Button}
                          leftIcon={<FaGraduationCap />}
                          rightIcon={<FaChevronDown />}
                          variant=""
                        >
                          Academics
                        </MenuButton>
                        <MenuList className="submenu">
                          <Link onClick={onClose} to="/math">
                            <MenuItem>Math</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/science">
                            <MenuItem>Science</MenuItem>
                          </Link>
                          <Link onClick={onClose} to="/language">
                            <MenuItem>Language</MenuItem>
                          </Link>
                        </MenuList>
                      </Menu>

                      <Link onClick={onClose} to={'/design'}>
                        <MenuItem icon={<FaPalette />} as="a" href="#">
                          Design
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                  <Link onClick={onClose} to="/">
                    Home
                  </Link>
                  <Link onClick={onClose} to="/courses">
                    Courses
                  </Link>
                  <Link onClick={onClose} to="/instructors">
                    Instructors
                  </Link>
                  <Link onClick={onClose} to="/products">
                    Store
                  </Link>
                  <Link onClick={onClose} to="/forums">
                    Forums
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          {/* Logo */}
          <HStack gap={4}>
            <Image src={Logo} alt="Logo" boxSize="40px" />
            <Heading
              size="md"
              marginLeft={'-15px'}
              fontWeight="bold"
              color={'#13243d'}
            >
              ARRC LMS
            </Heading>

            {/* Menu Button for Categories */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FaBars />}
                variant="outline"
                display={{ base: 'none', md: 'flex' }}
              />
              <MenuList>
                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<FaCode />}
                    rightIcon={<FaChevronDown />}
                    variant=""
                  >
                    Development
                  </MenuButton>
                  <MenuList className="submenu">
                    <Link to="/web-development">
                      <MenuItem>Web Development</MenuItem>
                    </Link>
                    <Link to="/game-development">
                      <MenuItem>Game Development</MenuItem>
                    </Link>
                    <Link to="/mobile-development">
                      <MenuItem>Mobile Development</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>

                <br />

                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<FaBriefcase />}
                    rightIcon={<FaChevronDown />}
                    variant=""
                  >
                    Business
                  </MenuButton>
                  <MenuList className="submenu">
                    <Link to="/management">
                      <MenuItem>Management</MenuItem>
                    </Link>
                    <Link to="/communication">
                      <MenuItem>Communication</MenuItem>
                    </Link>
                    <Link to="/business-strategy">
                      <MenuItem>Business Strategy</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>

                <Link to="/marketing">
                  <MenuItem icon={<FaChartLine />} as="a" href="#">
                    Marketing
                  </MenuItem>
                </Link>

                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<FaHeartbeat />}
                    rightIcon={<FaChevronDown />}
                    variant=""
                  >
                    Life Style
                  </MenuButton>
                  <MenuList className="submenu">
                    <Link to="/life-style">
                      <MenuItem>Life Style</MenuItem>
                    </Link>
                    <Link to="/beauty-makeup">
                      <MenuItem>Beauty & Makeup</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>

                <br />

                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<FaGraduationCap />}
                    rightIcon={<FaChevronDown />}
                    variant=""
                  >
                    Academics
                  </MenuButton>
                  <MenuList className="submenu">
                    <Link to="/math">
                      <MenuItem>Math</MenuItem>
                    </Link>
                    <Link to="/science">
                      <MenuItem>Science</MenuItem>
                    </Link>
                    <Link to="/language">
                      <MenuItem>Language</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>

                <Link to={'/design'}>
                  <MenuItem icon={<FaPalette />} as="a" href="#">
                    Design
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            {/* Links for Desktop */}
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/instructors">Instructors</Link>
              <Link to="/products">Store</Link>
              <Link to="/forums">Forums</Link>
            </HStack>
          </HStack>

          {/* Start Learning Button */}
          <Link to="/login">
            <Button colorScheme={'green'} variant="solid">
              Start Learning
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
