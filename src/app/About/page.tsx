"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ReusableHeading from "../component/heading";
import AboutImage from "../assets/images/aboutLeft.png";
import AboutAbs from "../assets/images/aboutAbs.png";
import ButtonReusable from "../component/button";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box py="100px" id="about">
        <Container maxW="1280px">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: "28", md: "10" }}
            my={{ base: "5", md: "16" }}
          >
            <Box height="400px" position="relative">
              <Image
                style={{ height: "full", width: "full" }}
                src={AboutImage}
                alt="banner"
              />
              <Box position="absolute" top="-8%" left="-2%">
                <Image src={AboutAbs} alt="banner" />
              </Box>
            </Box>

            <Box>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="start"
                flexDirection="column"
              >
                <ReusableHeading
                  text="-About Our Company-"
                  secProp="#FDE6EE"
                  thirdProp="#E9004F"
                />
                <Heading
                  as="h2"
                  my="20px"
                  color={colorMode === "light" ? "#2D3958" : "white"}
                >
                  MENA&apos;s Leading ROI-focused Influencer Marketing Agency.``
                </Heading>
                <Text
                  color={colorMode === "light" ? "#6E7CA0" : "white"}
                  my="15px"
                >
                  Our group of marketing experts will guide your company with
                  clear direction and actionable steps to achieve its goals and
                  boost your business&apos;s growth in the region.
                </Text>
                <Text
                  color={colorMode === "light" ? "#6E7CA0" : "white"}
                  my="15px"
                >
                  {" "}
                  This is made possible by identifying KPIs, goals, and other
                  requirements that might have slipped under your radar. We
                  follow by building you a custom marketing campaign meant to
                  improve brand reputation, increase brand presence and optimize
                  brand positioning thanks to our growing network of
                  influencers.
                </Text>
                <Text
                  color={colorMode === "light" ? "#6E7CA0" : "white"}
                  my="15px"
                >
                  {" "}
                  All these campaigns are tracked and reported in an honest and
                  transparent way that answers all of your burning inquiries.
                </Text>
              </Box>
              <Box mt="5">
                <ButtonReusable
                  text="VIEW OUR SERVICES"
                  secProp={colorMode === "light" ? "transparent" : "white"}
                  thirdProp={colorMode === "light" ? "black" : "black"}
                  forThProp=""
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default About;
