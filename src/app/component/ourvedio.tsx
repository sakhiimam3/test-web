"use client";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import ReusableHeading from "./heading";
import Image from "next/image";
import ourVedioImage from "../assets/images/ourvedio.png";
import vediobar from "../assets/images/vediobar.png";
const OurVedio = () => {
  const vediobarURL = vediobar.src;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <>
      <Box py="100px" bg="#F9FAFB">
        <Container maxW="1280px">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block">
              <ReusableHeading
                text="-our Video-"
                secProp="#F6EDFF"
                thirdProp="#A044FF"
              />
            </Box>
            <Heading as="h1" my="5" textTransform="capitalize">
              We are ready
              <span className="vedio-h-border"> to serve you differently</span>
            </Heading>
            <Text textAlign="center" maxW="650px" color="#6E7CA0">
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
              width="70%"
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
              >
                <Box>
                  <Heading textAlign="center" fontWeight="medium" color="white">
                    450+
                  </Heading>
                  <Text
                    textAlign="center"
                    textTransform="capitalize"
                    color="white"
                  >
                    Awesome Talents
                  </Text>
                </Box>
                <Box>
                  <Heading textAlign="center" fontWeight="medium" color="white">
                    300+
                  </Heading>
                  <Text textAlign="center" fontWeight="medium" color="white">
                    Project Completed
                  </Text>
                </Box>
                <Box>
                  <Heading textAlign="center" fontWeight="medium" color="white">
                    40 Million
                  </Heading>
                  <Text textAlign="center" color="white">
                    Monthly Impressions
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h2"
                    fontWeight="medium"
                    textAlign="center"
                    color="white"
                  >
                    100 Million
                  </Heading>
                  <Text textAlign="center" color="white">
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
