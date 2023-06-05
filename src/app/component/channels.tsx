"use client";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import ReusableHeading from "./heading";
import Image from "next/image";
import BottomImage from "../assets/images/socialIcons.png";

const Channels:React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box my={{base:'16',md:'24'}}>
        <Container maxW="1280">
          <Box
          display="flex"
          justifyContent="space-between"
          alignItems='center'
          flexDirection={{base:'column',md:'row'}}
          gap={{base:'10',md:"0"}}
          >
            <Box>
              <Box display="flex" justifyContent={{base:'center',md:'start'}} mb="7">
                <ReusableHeading
                  text="-Channels-"
                  secProp="#FDE6EE"
                  thirdProp="#E9004F"
                />
              </Box>
              <Heading as="h2" fontSize={{base:'20px',md:'28'}} color={colorMode === "light" ? "#6E7CA0" : 'white'} textAlign={{base:'center',md:'start'}}>
                We use a multi-channel <br /> social media approach.
              </Heading> 
            </Box>
            <Box maxW="600px">
              <Text  mb="3" color={colorMode === "light" ? "#6e7ca0" : 'white'}>
                With a complementarity between mega and macro-influencers, and a
                strategic target on each platform to hit the right target
                population you wish;
              </Text>
              <Text   color={colorMode === "light" ? "#6e7ca0" : 'white'}>
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
