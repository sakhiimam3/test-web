import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import ReusableHeading from "./heading";
import slide1 from "../assets/images/slider1.png";
import slide2 from "../assets/images/slider2.png";
import slide3 from "../assets/images/slider3.png";
import slide4 from "../assets/images/slider4.png";
import slide5 from "../assets/images/slider1.png";

const images = [slide1, slide2, slide3, slide4, slide5];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <BsArrowLeft color="black" fontSize="30px" />,
    nextArrow: <BsArrowRight color="black" fontSize="30px" />,

    responsive: [
      {
        breakpoint: 1920, // large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // medium to large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // small to medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // extra small to small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // extra small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box width="full" my="28" bg="#FFC700">
      <Container maxW="1280">
        <Box>
          <Box
            display="flex"
            py="10"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <ReusableHeading
              text="-Case Studies-"
              secProp="#0083FF"
              thirdProp="#FFFFFF"
            />
            <Heading my="3">Best Work Showcase</Heading>
            <Text textAlign="center" maxW={{ base: "100%", md: "650px" }}>
              Driven by our passion for the industry, and our team’s, Arabia
              Talents have created some of the most engaging influencer
              campaigns in gaming, sports, technology and more.
            </Text>
          </Box>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box py="20" key={index} mx="20px">
                <Image
                  style={{ width: "280px" }}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default SliderComponent;
