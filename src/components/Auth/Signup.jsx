import React, { useState } from 'react';
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
  Select,
  Checkbox,
} from '@chakra-ui/react';

// Importing CSS
import './auth.css';

// Importing images
import loginImage from '../../assets/front_register.jpg';
import { Link } from 'react-router-dom';
import Google from '../../assets/google.svg';
import Facebook from '../../assets/facebook.svg';

// Custom Radio Button
function CustomRadio(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      {props.value === 'student' ? (
        <Box
          {...checkbox}
          cursor="pointer"
          _checked={{
            bg: '#43d477',
            color: 'white',
            borderColor: '#43d477',
          }}
          color={'#4a5568'}
          px={'45px'}
          py={'10px'}
          boxSizing="border-box"
          overflow="hidden"
          border={'1px solid #e2e8f0'}
          borderRadius={'5px 0 0 5px'}
          fontSize={'0.75rem'}
        >
          {props.children}
        </Box>
      ) : props.value === 'instructor' ? (
        <Box
          {...checkbox}
          cursor="pointer"
          _checked={{
            bg: '#43d477',
            color: 'white',
            borderColor: '#43d477',
          }}
          color={'#4a5568'}
          px={'45px'}
          py={'10px'}
          boxSizing="border-box"
          overflow="hidden"
          border={'1px solid #e2e8f0'}
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
          px={'45px'}
          py={'10px'}
          boxSizing="border-box"
          overflow="hidden"
          border={'1px solid #e2e8f0'}
          fontSize={'0.75rem'}
          borderRadius={'0 5px 5px 0'}
        >
          {props.children}
        </Box>
      )}
    </Box>
  );
}

const Signup = () => {
  const [inputType, setInputType] = useState('student');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'userType',
    defaultValue: 'student',
    onChange: setInputType,
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
            <Flex flex={1} p={10} align="center" justify="center">
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
                  <RadioGroup defaultValue="student">
                    <Stack
                      {...group}
                      // w={'404px'}
                      gap={'flex-end'}
                      borderRadius={'12px'}
                      height={'25px'}
                      boxSizing="border-box"
                      direction="row"
                      mb={6}
                    >
                      <CustomRadio {...getRadioProps({ value: 'student' })}>
                        Student
                      </CustomRadio>
                      <CustomRadio {...getRadioProps({ value: 'instructor' })}>
                        Instructor
                      </CustomRadio>
                      <CustomRadio
                        {...getRadioProps({ value: 'organization' })}
                      >
                        Organization
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

                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    gap={5}
                    alignItems={'center'}
                  >
                    <FormControl w={'60%'} id="country" mb={4}>
                      <FormLabel
                        fontSize={'14px'}
                        fontWeight={500}
                        color={'#171347'}
                      >
                        Country:
                      </FormLabel>
                      <Select
                        focusBorderColor="#2aba5e"
                        cursor={'pointer'}
                        placeholder="Select country"
                        defaultValue="+91"
                      >
                        <option value="+1">USA (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+91">India (+91)</option>
                        <option value="+213">Algeria (+213)</option>
                        <option value="+376">Andorra (+376)</option>
                        <option value="+244">Angola (+244)</option>
                        <option value="+1264">Anguilla (+1264)</option>
                        <option value="+1268">Antigua & Barbuda (+1268)</option>
                        <option value="+54">Argentina (+54)</option>
                        <option value="+374">Armenia (+374)</option>
                        <option value="+297">Aruba (+297)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+43">Austria (+43)</option>
                        <option value="+994">Azerbaijan (+994)</option>
                        <option value="+1242">Bahamas (+1242)</option>
                        <option value="+973">Bahrain (+973)</option>
                        <option value="+880">Bangladesh (+880)</option>
                        <option value="+1246">Barbados (+1246)</option>
                        <option value="+375">Belarus (+375)</option>
                        <option value="+32">Belgium (+32)</option>
                        <option value="+501">Belize (+501)</option>
                        <option value="+229">Benin (+229)</option>
                        <option value="+1441">Bermuda (+1441)</option>
                        <option value="+975">Bhutan (+975)</option>
                        <option value="+591">Bolivia (+591)</option>
                        <option value="+387">Bosnia Herzegovina (+387)</option>
                        <option value="+267">Botswana (+267)</option>
                        <option value="+55">Brazil (+55)</option>
                        <option value="+673">Brunei (+673)</option>
                        <option value="+359">Bulgaria (+359)</option>
                        <option value="+226">Burkina Faso (+226)</option>
                        <option value="+257">Burundi (+257)</option>
                        <option value="+855">Cambodia (+855)</option>
                        <option value="+237">Cameroon (+237)</option>
                        <option value="+1">Canada (+1)</option>
                        <option value="+238">Cape Verde Islands (+238)</option>
                        <option value="+1345">Cayman Islands (+1345)</option>
                        <option value="+236">
                          Central African Republic (+236)
                        </option>
                        <option value="+56">Chile (+56)</option>
                        <option value="+86">China (+86)</option>
                        <option value="+57">Colombia (+57)</option>
                        <option value="+269">Comoros (+269)</option>
                        <option value="+242">Congo (+242)</option>
                        <option value="+682">Cook Islands (+682)</option>
                        <option value="+506">Costa Rica (+506)</option>
                        <option value="+385">Croatia (+385)</option>
                        <option value="+53">Cuba (+53)</option>
                        <option value="+90">Cyprus - North (+90)</option>
                        <option value="+357">Cyprus - South (+357)</option>
                        <option value="+420">Czech Republic (+420)</option>
                        <option value="+45">Denmark (+45)</option>
                        <option value="+253">Djibouti (+253)</option>
                        <option value="+1809">Dominica (+1809)</option>
                        <option value="+1809">
                          Dominican Republic (+1809)
                        </option>
                        <option value="+593">Ecuador (+593)</option>
                        <option value="+20">Egypt (+20)</option>
                        <option value="+503">El Salvador (+503)</option>
                        <option value="+240">Equatorial Guinea (+240)</option>
                        <option value="+291">Eritrea (+291)</option>
                        <option value="+372">Estonia (+372)</option>
                        <option value="+251">Ethiopia (+251)</option>
                        <option value="+500">Falkland Islands (+500)</option>
                        <option value="+298">Faroe Islands (+298)</option>
                        <option value="+679">Fiji (+679)</option>
                        <option value="+358">Finland (+358)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+594">French Guiana (+594)</option>
                        <option value="+689">French Polynesia (+689)</option>
                        <option value="+241">Gabon (+241)</option>
                        <option value="+220">Gambia (+220)</option>
                        <option value="+7880">Georgia (+7880)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+233">Ghana (+233)</option>
                        <option value="+350">Gibraltar (+350)</option>
                        <option value="+30">Greece (+30)</option>
                        <option value="+299">Greenland (+299)</option>
                        <option value="+1473">Grenada (+1473)</option>
                        <option value="+590">Guadeloupe (+590)</option>
                        <option value="+671">Guam (+671)</option>
                        <option value="+502">Guatemala (+502)</option>
                        <option value="+224">Guinea (+224)</option>
                        <option value="+245">Guinea - Bissau (+245)</option>
                        <option value="+592">Guyana (+592)</option>
                        <option value="+509">Haiti (+509)</option>
                        <option value="+504">Honduras (+504)</option>
                        <option value="+852">Hong Kong (+852)</option>
                        <option value="+36">Hungary (+36)</option>
                        <option value="+354">Iceland (+354)</option>
                      </Select>
                    </FormControl>

                    <FormControl id="phone" mb={4}>
                      <FormLabel
                        fontSize={'14px'}
                        fontWeight={500}
                        color={'#171347'}
                      >
                        Phone (Optional):
                      </FormLabel>
                      <Input focusBorderColor="#2aba5e" type="tel" />
                    </FormControl>
                  </Box>

                  <FormControl id="name" mb={4}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Full Name:
                    </FormLabel>
                    <Input focusBorderColor="#2aba5e" type="text" />
                  </FormControl>

                  <FormControl id="password" mb={4}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Password:
                    </FormLabel>
                    <Input focusBorderColor="#2aba5e" type="password" />
                  </FormControl>

                  <FormControl id="repassword" mb={4}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Retype Password:
                    </FormLabel>
                    <Input focusBorderColor="#2aba5e" type="password" />
                  </FormControl>

                  <FormControl id="timezone" mb={4}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Time Zone:
                    </FormLabel>
                    <Select
                      focusBorderColor="#2aba5e"
                      cursor={'pointer'}
                      placeholder="Select time zone"
                      defaultValue="Asia/Kolkata"
                    >
                      <option value="Asia/Kolkata">
                        Asia/Kolkata (Indian Standard Time)
                      </option>
                      <option value="America/New_York">
                        Eastern Time (New York)
                      </option>
                      <option value="America/Chicago">
                        Central Time (Chicago)
                      </option>
                      <option value="America/Denver">
                        Mountain Time (Denver)
                      </option>
                      <option value="America/Los_Angeles">
                        Pacific Time (Los Angeles)
                      </option>
                      <option value="Europe/London">London</option>
                      <option value="Europe/Berlin">Berlin</option>
                      <option value="Europe/Moscow">Moscow</option>
                      <option value="Asia/Tokyo">Tokyo</option>
                      <option value="Asia/Singapore">Singapore</option>
                      <option value="Asia/Kolkata">India (Kolkata)</option>
                      <option value="Australia/Sydney">Sydney</option>
                      <option value="Asia/Seoul">Seoul</option>
                      <option value="Asia/Shanghai">Shanghai</option>
                      <option value="Africa/Johannesburg">Johannesburg</option>
                      <option value="America/Sao_Paulo">Sao Paulo</option>
                      <option value="Asia/Dubai">Dubai</option>
                      <option value="Asia/Kuala_Lumpur">Kuala Lumpur</option>
                    </Select>
                  </FormControl>

                  <FormControl id="referralcode" mb={4}>
                    <FormLabel
                      fontSize={'14px'}
                      fontWeight={500}
                      color={'#171347'}
                    >
                      Referral Code:
                    </FormLabel>
                    <Input focusBorderColor="#2aba5e" type="text" />
                  </FormControl>

                  <FormControl id="terms" mb={4}>
                    <Checkbox
                      isChecked={agreeTerms}
                      onChange={() => setAgreeTerms(!agreeTerms)}
                      colorScheme="green"
                      size="lg"
                      border={'#43d477'}
                    >
                      <Text display={'flex'} gap={1} fontSize={"0.875rem"} fontWeight={400}>
                        I agree with{' '}
                        <Text color="#1f3b64" fontWeight={700}>
                          <Link to="/pages/terms">terms & rules</Link>
                        </Text>
                      </Text>
                    </Checkbox>
                  </FormControl>

                  <Button
                    type="submit"
                    className="btn-primary"
                    width="full"
                    mb={4}
                  >
                    Signup
                  </Button>

                  <Flex justify="center">
                    <Text mr={2}>Already have an account?</Text>
                    <Link to="/login">
                      <Box color="#1f3b64" fontWeight={700}>
                        Login
                      </Box>
                    </Link>
                  </Flex>
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
