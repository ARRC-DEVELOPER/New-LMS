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
  import { Link } from 'react-router-dom';
  
  import Logo from '../../../assets/logo.png';
  
  const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
  
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
            <Stack direction="row" alignItems="center" spacing={4}>
              <HStack gap={-1}>
                <Image src={Logo} alt="Logo" boxSize="40px" />
                <Heading size="md" fontWeight="bold" color={'#13243d'}>
                  ARRC LMS
                </Heading>
              </HStack>
  
              <Menu>
                <MenuButton as={IconButton} icon={<FaBars />} variant="outline" />
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
  
              <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/instructors">Instructors</Link>
                <Link to="/products">Store</Link>
                <Link to="/forums">Forums</Link>
              </HStack>
            </Stack>
  
            <Stack direction="row" alignItems="center">
              <Link to="/login">
                <Button colorScheme={'green'} variant="solid">
                  Start Learning
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    );
  };
  
  export default Navbar;
  