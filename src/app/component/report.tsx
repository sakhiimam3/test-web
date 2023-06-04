"use client";
import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import RepoImage from "../assets/images/compnayDeatil.png";
const Report = () => {
  return (
    <Box my="24">
      <Container maxW="1280">
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box>
            <Heading mb="8">
              <span className="report-heading"> We generated 3x more </span>{" "}
              <br /> engagement in 2022
            </Heading>
            <Text maxW={{ base: "100%", md: "450px" }}>
              Through strategy, planning, and marketing we built strong
              relationships and cooperation between brands and talents which led
              to increasing brand awareness, and social media engagement for
              both sides.
            </Text>
          </Box>
          <Box maxW={{ base: "100%", md: "500px" }}>
            <Image src={RepoImage} alt="company-deatail" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Report;
