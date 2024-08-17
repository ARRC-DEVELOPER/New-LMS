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
                      <Link to="/webdevlopment">
                        <MenuItem icon={<FaCode />}>Development</MenuItem>
                      </Link>

                      <Link to="/management">
                        <MenuItem icon={<FaBriefcase />} as="a" href="#">
                          Business
                        </MenuItem>
                      </Link>

                      <Link to="/marketing">
                        <MenuItem icon={<FaChartLine />} as="a" href="#">
                          Marketing
                        </MenuItem>
                      </Link>

                      <MenuItem icon={<FaHeartbeat />} as="a" href="#">
                        Lifestyle
                      </MenuItem>

                      <MenuItem icon={<FaGraduationCap />} as="a" href="#">
                        Academics
                      </MenuItem>

                      <MenuItem icon={<FaPalette />} as="a" href="#">
                        Design
                      </MenuItem>
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
                <Link to="/webdevlopment">
                  <MenuItem icon={<FaCode />}>Development</MenuItem>
                </Link>

                <Link to="/management">
                  <MenuItem icon={<FaBriefcase />} as="a" href="#">
                    Business
                  </MenuItem>
                </Link>

                <Link to="/marketing">
                  <MenuItem icon={<FaChartLine />} as="a" href="#">
                    Marketing
                  </MenuItem>
                </Link>

                <MenuItem icon={<FaHeartbeat />} as="a" href="#">
                  Lifestyle
                </MenuItem>

                <MenuItem icon={<FaGraduationCap />} as="a" href="#">
                  Academics
                </MenuItem>

                <MenuItem icon={<FaPalette />} as="a" href="#">
                  Design
                </MenuItem>
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
