"use client";
import React from "react";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import RepoImage from "../assets/images/compnayDeatil.png";
const Report:React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box my={{base:'10',md:'24'}}>
      <Container maxW="1280">
        <Box display="flex" flexDirection={{base:'column',md:'row'}} justifyContent="space-around" alignItems="center" gap={{base:'10',md:"0"}} >
          <Box>
            <Heading mb="8" color={colorMode === "light" ? "#2D3958" : 'white'} fontSize={{base:'24px',md:'28'}} textAlign={{base:'center',md:'start'}}>
              <span className="report-heading"> We generated 3x more </span>{" "}
              <br /> engagement in 2022
            </Heading>
            <Text maxW={{ base: "100%", md: "450px" }}  color={colorMode === "light" ? "#6E7CA0" : 'white'} textAlign={{base:'center',md:'start'}}>
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
