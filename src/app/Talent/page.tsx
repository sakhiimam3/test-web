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
      <Box my="20">
        <Container maxW="1280px">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block">
              <ReusableHeading
                text="-Our Rosters-"
                secProp="#29CCB1"
                thirdProp="#EAFAF8"
              />
            </Box>
            <Heading as="h1" my="5">
              Discover Our Talents
            </Heading>
            <Text textAlign="center" maxW="600px" color="#6E7CA0">
              We do manage an exclusive roster of talent, from content creadtors
              and social media influencers to Esports commentators, and even
              hosts. We work with a plethora of great talents.
            </Text>
          </Box>
          {/* section 2  */}
          <Box my="20" display="flex" gap="10px">
            {/* left side  */}
            <Box>
              <Box
                display="flex"
                sx={{ border: "1px solid #E7E5EA", height: "250px" }}
                alignItems="center"
                borderRadius="10px"
              >
                <Box>
                  <Image src={discover} alt="discoverr" />
                </Box>
                <Box>
                  <Text
                    fontSize="20px"
                    mb="5px"
                    color="#2D3958"
                    fontWeight="bold"
                  >
                    Arab Esports Broadcasters
                  </Text>
                  <Text
                    maxW={{ base: "100%", sm: "300px" }}
                    sx={{ color: "#6E7CA0" }}
                  >
                    Experienced play-by-play casters of Arabia Talents will
                    level up your sports events.
                  </Text>
                  <Box mt="8">
                    <ButtonReusable
                      text="MEET THE FACES"
                      secProp="transparent"
                      thirdProp="#2D3958"
                      forThProp=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                display="flex"
                sx={{ border: "1px solid #E7E5EA", height: "250px" }}
                alignItems="center"
                borderRadius="10px"
              >
                <Box pl="3.5">
                  <Text
                    fontSize="20px"
                    mb="10px"
                    fontWeight="bold"
                    color="#2D3958"
                  >
                    Middle Eastern Influencers
                  </Text>
                  <Text
                    maxW={{ base: "100%", sm: "300px" }}
                    sx={{ color: "#6E7CA0" }}
                  >
                    Arabia Talents connects brands to top influencers, and
                    content creators in the Middle East region.
                  </Text>

                  <Box mt="8">
                    <ButtonReusable
                      text="DISCOVER THE LIST"
                      secProp="transparent"
                      thirdProp="#2D3958"
                      forThProp=""
                    />
                  </Box>
                </Box>
                <Box>
                  <Image src={discover2} alt="discoverr" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Talent;
