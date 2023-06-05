"use client";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ReusableHeading from "../component/heading";
import ButtonReusable from "../component/button";
import discover from "../assets/images/dicover1.png";
import discover2 from "../assets/images/discover2.png";

const Talent:React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box my="20">
        <Container maxW="1280px">
          <Box display="flex" flexDirection="column"  alignItems="center">
            <Box display="inline-block">
              <ReusableHeading
                text="-Our Rosters-"
                secProp="#29CCB1"
                thirdProp="#EAFAF8"
              />
            </Box>
            <Heading as="h1" my="5" color={colorMode === "light" ? "#2D3958" : 'white'} textAlign={{base:'center',md:'start'}}>
              Discover Our Talents
            </Heading>
            <Text textAlign="center" maxW="600px" color={colorMode === "light" ? "#6E7CA0" : 'white'}>
              We do manage an exclusive roster of talent, from content creadtors
              and social media influencers to Esports commentators, and even
              hosts. We work with a plethora of great talents.
            </Text>
          </Box>
          {/* section 2  */}
          <Box my="20" display="flex" flexDirection={{base:'column',md:"row"}} gap={{base:'20',md:'10'}}>
            {/* left side  */}
            <Box>
              <Box
                display="flex"
                height={{base:'auto',md:"250px"}}
                sx={{ border: "1px solid #E7E5EA"}}
                alignItems="center"
                borderRadius="10px"
                flexDirection={{base:'column',md:'row'}}
                
              >
                <Box>
                  <Image src={discover} alt="discoverr" />
                </Box>
                <Box mx="2">
                  <Text
                    fontSize="20px"
                    mb="5px"
                    color={colorMode === "light" ? "#2D3958" : 'white'}
                    fontWeight="bold"
                  >
                    Arab Esports Broadcasters
                  </Text>
                  <Text
                    maxW={{ base: "100%", sm: "300px" }}
                    color={colorMode === "light" ? "#6E7CA0" : 'white'}
                    
                  >
                    Experienced play-by-play casters of Arabia Talents will
                    level up your sports events.
                  </Text>
                  <Box mt="8">
                    <ButtonReusable
                      text="MEET THE FACES"
                      secProp= {colorMode === "light"  ? "transparent"  : "white"}
                      thirdProp= {colorMode === "light"  ? "black"  : "black"}
                      forThProp=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                display="flex"
                height={{base:'auto',md:"250px"}}
                sx={{ border: "1px solid #E7E5EA"}}
                alignItems="center"
                borderRadius="10px"
                flexDirection={{base:'column',md:'row'}}
              >
                <Box pl="3.5">
                  <Text
                    fontSize="20px"
                    mb="10px"
                    fontWeight="bold"
                    color={colorMode === "light" ? "#2D3958" : 'white'}
                  >
                    Middle Eastern Influencers
                  </Text>
                  <Text
                    maxW={{ base: "100%", sm: "300px" }}
                    color={colorMode === "light" ? "#6E7CA0" : 'white'}
                  >
                    Arabia Talents connects brands to top influencers, and
                    content creators in the Middle East region.
                  </Text>

                  <Box mt="8">
                    <ButtonReusable
                      text="DISCOVER THE LIST"
                      secProp= {colorMode === "light"  ? "transparent"  : "white"}
                      thirdProp= {colorMode === "light"  ? "#2D3958"  : "black"}
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
