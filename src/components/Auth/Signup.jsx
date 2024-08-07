import React from 'react';
import {
  Box,
  Flex,
  Container,
  Heading,
  Image,
  RadioGroup,
  Stack,
  Radio,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

// Importing CSS
import './auth.css';

// Importing images
import loginImage from '../../assets/front_register.jpg';
import { Link } from 'react-router-dom';

// Custom Radio Button
function CustomRadio(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      {props.children === 'Email' ? (
        <Box
          {...checkbox}
          cursor="pointer"
          _checked={{
            bg: '#43d477',
            color: 'white',
            borderColor: '#43d477',
          }}
          color={'#4a5568'}
          px={'80px'}
          py={'10px'}
          boxSizing="border-box"
          overflow="hidden"
          border={'1px solid #e2e8f0'}
          borderRadius={'5px 0 0 5px'}
          fontSize={'0.75rem'}
        >
          {props.children}
        </Box>
      ) : (
        <Box
          {...checkbox}
          cursor="pointer"
          _checked={{
            bg: '#43d477',
            color: 'white',
            borderColor: '#43d477',
          }}
          color={'#4a5568'}
          px={'80px'}
          py={'10px'}
          boxSizing="border-box"
          overflow="hidden"
          border={'1px solid #e2e8f0'}
          borderRadius={'0 5px 5px 0'}
          fontSize={'0.75rem'}
        >
          {props.children}
        </Box>
      )}
    </Box>
  );
}

const Signup = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'userType',
    defaultValue: 'email',
  });

  const group = getRootProps();

  return (
    <section className="login">
      <div className="container">
        <Container maxWidth={'1200px'} mt={28} mb={20}>
          <Flex minHeight="100vh" className="loginContainer">
            <Box flex={1}>
              <Image
                src={loginImage}
                alt="Login"
                className="login-image-cover"
              />
            </Box>
            <Flex flex={1} align="center" justify="center">
              <Box width="full" maxW="md">
                <Heading
                  as="h1"
                  fontSize={'1.25rem'}
                  fontWeight={700}
                  lineHeight={1.22}
                  mb={6}
                >
                  Signup
                </Heading>

                <form action="/login">
                  <RadioGroup defaultValue="email">
                    <Stack
                      {...group}
                      w={'80%'}
                      gap={'flex-end'}
                      borderRadius={'12px'}
                      height={'25px'}
                      boxSizing="border-box"
                      direction="row"
                      mb={6}
                    >
                      <CustomRadio {...getRadioProps({ value: 'email' })}>
                        Email
                      </CustomRadio>
                      <CustomRadio {...getRadioProps({ value: 'mobile' })}>
                        Phone
                      </CustomRadio>
                    </Stack>
                  </RadioGroup>

                  <FormControl id="email" mt={10} mb={4}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Email:
                    </FormLabel>
                    <Input focusBorderColor="#2aba5e" type="email" />
                  </FormControl>

                  <FormControl id="password" mb={10}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Password:
                    </FormLabel>
                    <Input focusBorderColor="#2aba5e" type="password" />
                  </FormControl>

                  <Button
                    type="submit"
                    className="btn-primary"
                    width="full"
                    mb={4}
                  >
                    Login
                  </Button>

                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Text color={'#1f3b64'} fontSize={'0.75rem'}>
                      Login as
                    </Text>

                    <Flex justify="center" mt={4} gap={1} mb={4}>
                      <Button className="btn-sm" onClick={() => {}}>
                        Student
                      </Button>
                      <Button className="btn-sm" onClick={() => {}}>
                        Instructor
                      </Button>
                      <Button className="btn-sm" onClick={() => {}}>
                        Organization
                      </Button>
                    </Flex>

                    <Box
                      width={'24px'}
                      textAlign={'center'}
                      height={'24px'}
                      fontSize={'0.875rem'}
                      color={'#1f3b64'}
                      borderRadius={'50%'}
                      bgColor={'#ececec'}
                    >
                      or
                    </Box>
                  </Box>

                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    mt={8}
                  >
                    <Link to="/forget-password">Forgot your password?</Link>
                    <Flex mt={4} justify="center">
                      <Text mr={2}>Don't have an account?</Text>
                      <Link to="/sginup">
                        <Box color="#1f3b64" fontWeight={700}>
                          Signup
                        </Box>
                      </Link>
                    </Flex>
                  </Box>
                </form>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Signup;
