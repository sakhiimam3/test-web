"use client";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Brand from "../assets/images/brand.png";
import ReusableHeading from "../component/heading";
import ButtonReusable from "../component/button";
const Contact = () => {
  return (
    <>
      <Box my="20">
        <Container maxW="1280" position="relative">
          <Image
            style={{ width: "100%", height: "100%" }}
            src={Brand}
            alt="Brand"
          />
          <Box
            position="absolute"
            textAlign="center"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Heading as="h2" fontSize="28" mb="5">
              We've helped brands of all kinds and businesses of every size grow
              their online presense
            </Heading>
            <Text
              mb="5"
              color="#6E7CA0"
              textTransform="capitalize"
              fontWeight="500"
            >
              Are you ready to start your project? Contact us today and get
              started!
            </Text>
            <ButtonReusable
              text="Let’s Talk"
              secProp="#0083FF"
              thirdProp="white"
              forThProp=""
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
