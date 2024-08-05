import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Image,
  Flex,
  Icon,
  HStack,
  Input,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import { HiPhone, HiMail } from 'react-icons/hi';

// importing images
import Logo from '../../../assets/new-logo-white.png';
import ArrcImg from '../../../assets/arrc.png';

const Footer = () => {
  return (
    <>
      {/* Subscription Box */}
      <Box
        maxWidth="1200px"
        margin={'auto'}
        bg="green.300"
        color="white"
        px={10}
        height={'30vh'}
        bottom={'-65px'}
        zIndex={2}
        borderRadius={10}
        position="relative"
      >
        <Flex justify="space-between" align="center" height="100%">
          <VStack align="start" justify="center" height="100%">
            <Heading textAlign="center">Join Us Today</Heading>
            <Text textAlign="center">
              #We will send the best deals and offers to your email.
            </Text>
          </VStack>
          <HStack spacing={4} position="relative" w="500px">
            <Input
              w="full"
              padding={8}
              bgColor="white"
              borderRadius="full"
              placeholder="Enter your email here"
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
              Join
            </Button>
          </HStack>
        </Flex>
      </Box>

      {/* Main Footer Content */}
      <Box
        bg="blue.800"
        color="white"
        py={10}
        mt={-5}
        position="absolute"
        left={0}
        right={0}
        px={5}
        zIndex={1}
      >
        <Container maxW="container.xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mt={40}>
            <Box flex={1}>
              <Text fontSize="lg" fontWeight="bold">
                About Us
              </Text>
              <Text mt={2}>
                Rocket LMS is a fully-featured learning management system that
                helps you to run your education business in several hours. This
                platform helps instructors to create professional education
                materials and helps students to learn from the best instructors.
              </Text>
            </Box>
            <Box flex={1}>
              <Text fontSize="lg" fontWeight="bold">
                Additional Links
              </Text>
              <Stack spacing={2} mt={2}>
                <Link href="https://lms.rocket-soft.org/login">Login</Link>
                <Link href="https://lms.rocket-soft.org/register">
                  Register
                </Link>
                <Link href="https://lms.rocket-soft.org/blog">Blog</Link>
                <Link href="https://lms.rocket-soft.org/contact">
                  Contact us
                </Link>
                <Link href="https://lms.rocket-soft.org/certificate_validation">
                  Certificate validation
                </Link>
                <Link href="https://lms.rocket-soft.org/become-instructor">
                  Become instructor
                </Link>
                <Link href="https://lms.rocket-soft.org/pages/terms">
                  Terms & rules
                </Link>
                <Link href="https://lms.rocket-soft.org/pages/about">
                  About us
                </Link>
              </Stack>
            </Box>
            <Box flex={1}>
              <Text fontSize="lg" fontWeight="bold">
                Similar Businesses
              </Text>
              <Stack spacing={2} mt={2}>
                <Link href="https://www.udemy.com/" isExternal>
                  Udemy
                </Link>
                <Link href="https://www.skillshare.com/" isExternal>
                  Skillshare
                </Link>
                <Link href="https://www.coursera.org/" isExternal>
                  Coursera
                </Link>
                <Link href="https://www.linkedin.com/learning/" isExternal>
                  Lynda
                </Link>
                <Link href="https://www.skillsoft.com/" isExternal>
                  Skillsoft
                </Link>
                <Link href="https://www.udacity.com/" isExternal>
                  Udacity
                </Link>
                <Link href="https://www.edx.org/" isExternal>
                  edX
                </Link>
                <Link href="https://www.masterclass.com/" isExternal>
                  Masterclass
                </Link>
              </Stack>
            </Box>
            <Box
              flex={1}
              marginLeft={'-100px'}
              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
            >
              <Text fontSize="lg" fontWeight="bold">
                Purchase Rocket LMS
              </Text>
              <Link href="https://codecanyon.net/" title="Notnt" isExternal>
                <Image src={ArrcImg} filter="brightness(0) invert(1)" alt="Envato" mt={2} />
              </Link>
            </Box>
          </Stack>

          <Flex
            mt={10}
            align="center"
            justify="space-between"
            borderTopWidth={1}
            borderColor="gray.600"
            pt={4}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image src={Logo} alt="Logo" boxSize="40px" />
              <Heading size="md" fontWeight="bold">
                New LMS
              </Heading>
            </Box>

            <Flex align="center">
              <Link href="https://www.instagram.com/" isExternal>
                <Icon as={FaInstagram} boxSize={6} mr={4} />
              </Link>
              <Link href="https://web.whatsapp.com/" isExternal>
                <Icon as={FaWhatsapp} boxSize={6} mr={4} />
              </Link>
              <Link href="https://twitter.com/" isExternal>
                <Icon as={FaTwitter} boxSize={6} mr={4} />
              </Link>
              <Link href="https://www.facebook.com/" isExternal>
                <Icon as={FaFacebook} boxSize={6} mr={4} />
              </Link>
            </Flex>
          </Flex>

          <Flex
            direction="row"
            align="center"
            justify="space-between"
            mt={4}
            borderTopWidth={1}
            borderColor="gray.600"
            pt={4}
          >
            <Text fontSize="sm">
              All rights are reserved for learning management system platform
            </Text>
            <Flex align="center">
              <Icon as={HiPhone} boxSize={5} mr={2} />
              <Text fontSize="sm">415-716-1166</Text>
              <Box
                mx={4}
                height="100%"
                borderLeftWidth={1}
                borderColor="gray.600"
              />
              <Icon as={HiMail} boxSize={5} mr={2} />
              <Text fontSize="sm">mailer@rocket-soft.org</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
