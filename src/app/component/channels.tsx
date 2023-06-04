"use client";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ReusableHeading from "./heading";
import Image from "next/image";
import BottomImage from "../assets/images/socialIcons.png";

const Channels = () => {
  return (
    <>
      <Box my="16">
        <Container maxW="1280">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box display="flex" mb="7">
                <ReusableHeading
                  text="-Channels-"
                  secProp="#FDE6EE"
                  thirdProp="#E9004F"
                />
              </Box>
              <Heading as="h2">
                We use a multi-channel <br /> social media approach.
              </Heading>
            </Box>
            <Box maxW="600px">
              <Text color="#6e7ca0" mb="3">
                With a complementarity between mega and macro-influencers, and a
                strategic target on each platform to hit the right target
                population you wish;
              </Text>
              <Text color="#6e7ca0">
                we can fulfill your social media goals and establish a community
                instead of just taking a typical UA approach.
              </Text>
            </Box>
          </Box>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              margin: "30px  0px",
            }}
            src={BottomImage}
            alt="social-icons"
          />
        </Container>
      </Box>
    </>
  );
};
export default Channels;
