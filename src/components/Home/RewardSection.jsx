import { Flex, Heading, Text, Button, Image, Box } from '@chakra-ui/react';

// importing images
import rewardImg from '../../assets/club_points_banner.png';
import medalIcon from '../../assets/medal.png';

// importing css
import './home.css';

const RewardSection = () => {
  return (
    <Box className="reward-container">
      <Flex
        direction={['column', 'row']}
        alignItems="center"
        justifyContent="center"
        position="relative"
        mb={10}
      >
        <Box
          position={'relative'}
          width={['100%', '50%']}
          boxSizing="border-box"
          mb={[8, 0]}
        >
          <Image
            src={rewardImg}
            alt="Reward Section"
            className="reward-left-box-img"
          />

          <Box className="reward-bounce-box" display={'flex'} gap={3} mx="auto">
            <Image
              src={medalIcon}
              boxSize={['40px', '50px']}
              objectFit="cover"
            />
            <Box>
              <Text color={'#1f3b64'} fontWeight={700}>
                You earned 50 points!
              </Text>
              <Text color={'GrayText'}>for completing the course...</Text>
            </Box>
          </Box>
        </Box>

        <Box
          width={['100%', '50%']}
          textAlign={['center', 'left']}
          px={[4, 8]}
        >
          <Heading
            as="h2"
            fontSize={['1.5rem', '2.25rem']}
            lineHeight={1.22}
            color={'#343434'}
            fontWeight={700}
          >
            Win Club Points
          </Heading>
          <Text
            fontSize={['0.875rem', '1rem']}
            lineHeight={1.5}
            color={'#818894'}
            fontWeight={400}
            mt={'10px'}
            maxW={'90%'}
            mx="auto"
          >
            Use ARRC Technology LMS and win club points according to different activities.
            You will be able to use your club points to get free prizes and
            courses. Start using the system now and collect points!
          </Text>
          <Flex direction={['column', 'row']} gap={4} mt={8} justifyContent="center">
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
      </Flex>
    </Box>
  );
};

export default RewardSection;
