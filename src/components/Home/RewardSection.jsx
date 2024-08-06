import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';

// importing images
import rewardImg from '../../assets/club_points_banner.png';
import medalIcon from '../../assets/medal.png';

// importing css
import './home.css';

const RewardSection = () => {
  return (
    <Box
      display={'flex'}
      direction="row"
      alignItems="center"
      justifyContent="center"
      px={8}
      className="reward-container"
    >
      <Box position={'relative'} boxSizing="border-box" width={'50%'}>
        <Image
          src={rewardImg}
          alt="Forum Section"
          m={'auto'}
          className="reward-left-box-img"
        />

        <Box className="reward-bounce-box" display={'flex'} gap={3}>
          <Image
            src={medalIcon}
            overflow={'hidden'}
            objectFit={'cover'}
            boxSizing="borderbox"
            boxSize="50px"
          />
          <Box>
            <Text color={'#1f3b64'} fontWeight={700}>
            You earned 50 points!
            </Text>
            <Text color={'GrayText'}>for completing the course...</Text>
          </Box>
        </Box>
      </Box>

      <Box width={'50%'} boxSizing="border-box">
        <Heading
          as="h2"
          fontSize={'2.25rem'}
          lineHeight={1.22}
          color={'#343434'}
          fontWeight={700}
        >
          Win Club Points
        </Heading>
        <Text
          fontSize={'1rem'}
          lineHeight={1.5}
          color={'#818894'}
          fontWeight={400}
          mt={'10px'}
          maxW={'90%'}
        >
          Use Rocket LMS and win club points according to different activities.
          You will be able to use your club points to get free prizes and
          courses. Start using the system now and collect points!
        </Text>
        <Flex gap={4} mt={8}>
          <Button className="btn-primary">Rewards</Button>
          <Button
            variant="outline"
            colorScheme="green"
            className="btn-secondary"
          >
            Points Club
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RewardSection;
