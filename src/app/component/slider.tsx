import React from "react";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import SwiperCore, { Navigation } from 'swiper';


import Image from "next/image";

import ReusableHeading from "./heading";
import slide1 from "../assets/images/slider1.png";
import slide2 from "../assets/images/slider2.png";
import slide3 from "../assets/images/slider3.png";
import slide4 from "../assets/images/slider4.png";
import slide5 from "../assets/images/slider1.png";

const images = [slide1, slide2, slide3, slide4, slide5];
SwiperCore.use([Navigation]);
const NextButton = () => {
  return (
    <Box className="swiper-button-next">
        <CgArrowRight />
    </Box>
  );
};

const PrevButton = () => {
  return (
    <Box className="swiper-button-prev">
     <CgArrowLeft />
    </Box>
  );
};
const SliderComponent: React.FC = () => {

  const { colorMode } = useColorMode();
  const breakpoints = {
    576: {
      slidesPerView: 1,
     // Center the slides
     centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 4,
    },
  };

  return (
    <Box width="full" my="28" bg={colorMode === "light" ? "#FFC700" : "black"}>
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
            <Heading my="3" color={colorMode === "light" ? "#2D3958" : "white"}>
              Best Work Showcase
            </Heading>
            <Text
              textAlign="center"
              maxW={{ base: "100%", md: "650px" }}
              color={colorMode === "light" ? "#6E7CA0" : "white"}
            >
              Driven by our passion for the industry, and our team’s, Arabia
              Talents have created some of the most engaging influencer
              campaigns in gaming, sports, technology and more.
            </Text>
          </Box>

          <Swiper
            
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination= {{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={breakpoints}
            spaceBetween={10} // Adjust as needed
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  py={{ base: "10", md: "20" }}
                  maxWidth={{ base: "70%", md: "90%" }}
                >
                  <Image src={image} alt={`Image ${index + 1}`} />
                </Box>
              </SwiperSlide>
            ))}
            <Box className="swiper-button-next">
              <CgArrowRight />
            </Box>
            <Box className="swiper-button-prev">
              <CgArrowLeft />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default SliderComponent;
