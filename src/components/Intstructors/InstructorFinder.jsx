import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const InstructorFinder = ({ instructors }) => {
  const [zoomLevel, setZoomLevel] = useState(2);
  const [center, setCenter] = useState([40.7128, -74.006]);

  const navigate = useNavigate();

  const handleZoomChange = e => {
    setZoomLevel(e.target.getZoom());
  };

  const handleMapClick = e => {
    setCenter([e.latlng.lat, e.latlng.lng]);
  };

  const handleProfileClick = (id) => {
    navigate(`/instructor/profile/${id}`);
  }

  return (
    <Box>
      <MapContainer
        center={center}
        zoom={zoomLevel}
        style={{ height: '500px' }}
        onClick={handleMapClick}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {instructors.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={L.icon({
              className: 'marker-icon',
              iconUrl: marker.iconUrl,
              iconSize: [35, 45],
              iconAnchor: [17, 45],
            })}
          >
            <Popup>
              <Box
                textAlign={'center'}
                display={'flex'}
                width={"150px"}
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Image className="instructor-avatar" src={marker.iconUrl} />
                <Heading
                  as={'h4'}
                  fontWeight={700}
                  fontSize={'1rem'}
                  marginTop={'5px'}
                >
                  {marker.name}
                </Heading>
                <Box fontSize={'0.75rem'} color={'gray'}>
                  {marker.profile_headline}
                </Box>

                <HStack
                  spacing={'-3'}
                  marginTop={'10px'}
                  display={'flex'}
                  alignItems="flex-start"
                >
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                  <Icon as={StarIcon} color="yellow.500" boxSize={4} mr={2} />
                </HStack>

                <Box display={'flex'} alignItems={'center'}>
                  <Text fontWeight={700} fontSize={'1.25rem'} color={'#43d477'}>
                    ₹{marker.charges}
                  </Text>
                  <Text fontWeight={500} fontSize={'0.875rem'} color={'gray'}>
                    /hour
                  </Text>
                </Box>

                <Button
                  variant="solid"
                  colorScheme="green"
                  width={'full'}
                  onClick={() => handleProfileClick(marker._id)}
                >
                  Profile
                </Button>
              </Box>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default InstructorFinder;
