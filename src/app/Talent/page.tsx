"use client";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ReusableHeading from "../component/heading";
import ButtonReusable from "../component/button";
import discover from "../assets/images/dicover1.png";
import discover2 from "../assets/images/discover2.png";

const Talent = () => {
  return (
    <>
      <Box py="100px">
        <Container maxW="1280px">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block">
              <ReusableHeading
                text="-Our Rosters-"
                secProp="#29CCB1"
                thirdProp="#EAFAF8"
              />
            </Box>
            <Heading as="h1" my="10px"  >
              Discover Our Talents
            </Heading>
            <Text textAlign="center" maxW="600px" color="#6E7CA0">
              We do manage an exclusive roster of talent, from content creadtors
              and social media influencers to Esports commentators, and even
              hosts. We work with a plethora of great talents.
            </Text>
          </Box>
          {/* section 2  */}
          <Box my="25px" display="flex" >
            {/* left side  */}
            <Box display="flex"  alignItems="center" gap="10px"  bg="#E7E5EA">
             <Box>
             <Image src={discover} alt="discoverr" />
             </Box>
              <Box>
                  <Text fontSize="20px" mb="10px" color="#6E7CA0" fontWeight="bold" >
                  Arab Esports Broadcasters
                  </Text>
                  <Text>
                  Experienced play-by-play casters of Arabia Talents will level up your sports events.
                  </Text>
                  <ButtonReusable text="MEET THE FACES"  secProp="transparent" thirdProp="#2D3958" forThProp="" />
              </Box>
            </Box>
            {/* right side  */}
            <Box display="flex" alignItems="center" gap="10px" >
              <Box>
              <Text  fontSize="20px" fontWeight="bold" color="#6E7CA0">
                  Arab Esports Broadcasters
                  </Text>
                  <Text>
                  Experienced play-by-play casters of Arabia Talents will level up your sports events.
                  </Text>
                  <ButtonReusable text="MEET THE FACES"  secProp="transparent" thirdProp="#2D3958" forThProp="" />
              </Box>
              <Box>
              <Image src={discover2} alt="discoverr" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Talent;
