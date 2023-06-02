"use client";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ReusableHeading from "../component/heading";
import AboutImage from "../assets/images/aboutLeft.png";
import ButtonReusable from "../component/button";

const About = () => {
  return (
    <>
      <Box py="100px">
        <Container maxW="1280px">
          {/* <Box display="flex" justifyContent="center" alignItems="center">
                         <ReusableHeading text="-About Our Company-" secProp="#FDE6EE" thirdProp="#E9004F"/>
                     </Box> */}
          <SimpleGrid columns={2} spacing="10">
            <Box height="400px">
              <Image style={{height:'full',width:"full"}} src={AboutImage} alt="banner" />
            </Box>
            <Box>
              <Box display="flex" justifyContent="start" alignItems="start" flexDirection="column">
                <ReusableHeading
                  text="-About Our Company-"
                  secProp="#FDE6EE"
                  thirdProp="#E9004F"
                />
                <Heading as="h2" my="20px">
                MENA's Leading ROI-focused Influencer Marketing Agency.
                </Heading>
                <Text color="#6E7CA0" my="15px" >
                  Our group of marketing experts will guide your company with
                  clear direction and actionable steps to achieve its goals and
                  boost your business's growth in the region.
                </Text>
                <Text color="#6E7CA0" my="15px"> This is made
                  possible by identifying KPIs, goals, and other requirements
                  that might have slipped under your radar. We follow by
                  building you a custom marketing campaign meant to improve
                  brand reputation, increase brand presence and optimize brand
                  positioning thanks to our growing network of influencers.</Text>
                <Text color="#6E7CA0"   my="15px"> All
                  these campaigns are tracked and reported in an honest and
                  transparent way that answers all of your burning inquiries.</Text>
              </Box>
                <ButtonReusable  text="VIEW OUR SERVICES" secProp="transparent" thirdProp="#2D3958" forThProp=""/>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default About;
