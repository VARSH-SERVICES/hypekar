import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'HypeKar, the best service in India',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.ctfassets.net/33n6gwydcv8y/5baEc7ZISMkYP9nHVZpklO/5bdf46f27ffc65a3697cfd9c9be71ad5/car-service-history.png',
    },
    {
      title: 'HypeKar, the best service in India',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://media.sciencephoto.com/image/f0331238/800wm',
    },
    {
      title: 'HypeKar, the best service in India',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://media.gettyimages.com/photos/car-lifting-picture-id1036063284?s=612x612',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'1xl'}
            position="relative"
            // objectFit={'fill'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading color="white" textAlign="center" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'lg', lg: 'lg' }} color="#38A169">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}