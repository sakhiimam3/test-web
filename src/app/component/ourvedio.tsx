"use client";
import { Box, Container, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React, { useRef } from "react";
import ReusableHeading from "./heading";
import Image from "next/image";
import ourVedioImage from "../assets/images/ourvedio.png";
import vediobar from "../assets/images/vediobar.png";


const OurVedio : React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const vediobarURL = vediobar.src;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <>
      <Box py="100px" bg={colorMode === "light" ? "#F9FAFB":"black"}>
        <Container maxW="1280px">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block">
              <ReusableHeading
                text="-our Video-"
                secProp="#F6EDFF"
                thirdProp="#A044FF"
              />
            </Box>
            <Heading as="h1" my="5" color={colorMode === "light" ? "#2D3958" : 'white'} textAlign={{base:'center',md:"start"}}  fontSize={{base:'20px',md:"28"}} textTransform="capitalize">
              We are ready
              <span className="vedio-h-border"> to serve you differently</span>
            </Heading>
            <Text textAlign="center" maxW="650px" color={colorMode === "light" ? "#6E7CA0" : 'white'}>
              Arabia Talents brings to the table unmatched know-how in the
              gaming, esports, and entertainment industries, all backed by the
              very best in integrated marketing services.
            </Text>
          </Box>
          {/* bottom section  */}
          <Box
            width="100%"
            borderRadius="10px"
            height="400px"
            mt="200px"
            position="relative"
          >
            <Box
              bg="red"
              width={{base:'100%',md:'70%'}}
              top="-120px"
              borderRadius="10px"
              left="50%"
              height="350px"
              position="absolute"
              transform="translateX(-50%)"
              cursor="pointer"
            >
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",

                  borderRadius: "10px",
                }}
                onClick={handleVideoClick}
                poster={vediobarURL}
                ref={videoRef}
                controls
              >
                <source src="https://youtu.be/l-96m1VD5k4" type="video/mp4" />
              </video>
            </Box>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              src={ourVedioImage}
              alt="ourVedioImage"
            />
            <Box
              position="absolute"
              left="50%"
              width="100%"
              transform="translateX(-50%)"
              bottom="10"
            >
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexDirection={{base:'column',md:'row'}}
               
              
              >
                <Box>
                  <Heading textAlign="center" fontSize={{base:'10px',md:'20'}} fontWeight="medium" color="white">
                    450+
                  </Heading>
                  <Text
                    textAlign="center"
                    textTransform="capitalize"
                    color="white"
                    fontSize={{base:'10px',md:'20'}}
                  >
                    Awesome Talents
                  </Text>
                </Box>
                <Box>
                  <Heading textAlign="center" fontSize={{base:'10px',md:'20px'}} fontWeight="medium" color="white">
                    300+
                  </Heading>
                  <Text textAlign="center" fontWeight="medium" color="white"  fontSize={{base:'10px',md:'20'}}>
                    Project Completed
                  </Text>
                </Box>
                <Box>
                  <Heading textAlign="center" fontSize={{base:'10px',md:'20'}} fontWeight="medium" color="white">
                    40 Million
                  </Heading>
                  <Text textAlign="center" color="white"  fontSize={{base:'10px',md:'20'}}>
                    Monthly Impressions
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h2"
                    fontWeight="medium"
                    textAlign="center"
                    color="white"
                    fontSize={{base:'10px',md:'20'}}
                  >
                    100 Million
                  </Heading>
                  <Text textAlign="center" color="white"  fontSize={{base:'10px',md:'20'}}>
                    Global Reach
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default OurVedio;
