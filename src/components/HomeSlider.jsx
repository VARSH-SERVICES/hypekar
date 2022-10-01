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

export default function HomeSlider() {
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
      title: 'PERIODIC SERVICES',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg',
    },
    {
      title: 'AC SERVICES',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://carfixo.in/wp-content/uploads/2021/01/ac-service-5645.jpg',
    },
    {
      title: 'WHEEL CARE',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://i0.wp.com/blog.getpitstop.com/wp-content/uploads/2021/04/Wheel-Care-Services-At-Pitstop.jpg?resize=1152%2C600&ssl=1',
    },
    {
        title: 'REPAIRS',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://www.onedios.com/blog/wp-content/uploads/2021/04/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg',
      },
      {
        title: 'BATTERY SERVICES',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://car-o-man.com/wp-content/uploads/2018/04/battery-service-car-o-man-hyderabad.jpg',
      },
      {
        title: 'ACCESERIES AND SPARES',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://e7.pngegg.com/pngimages/206/235/png-clipart-assorted-vehicle-part-illustration-car-honda-legend-sport-utility-vehicle-spare-part-automotive-engine-parts-automotive-accessories.png',
      },
      {
        title: 'PREMIUM SERVICES',
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
                <Heading color="#3182CE" textAlign="center" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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