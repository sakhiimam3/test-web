"use client";
import { Box, Container, Text, Heading, SimpleGrid, useColorMode } from "@chakra-ui/react";
import React from "react";
import ReusableHeading from "../component/heading";
import CardReusable from "../component/card";
import Metadata from "../component/metaData";



const Services : React.FC =()=> {
  const { colorMode, toggleColorMode } = useColorMode();

  const cardData = [
    {
      number: "01",
      heading: "Influencer Marketing",
      text: "We have the right knowledge, tools, and expertise to help your company succeed in influencer marketing campaigns.",
      bkc: "#886CFF",
    },
    {
      number: "02",
      heading: "Talent Management",
      text: "We can help turn your dreams into a long-term, full-time career, filled with endless opportunities that will provide you with a lucrative income and stability.",
      bkc: "#EF3737",
    },
    {
      number: "03",
      heading: "Celebrity Collaboration",
      text: "We are an authentic Celebrity Influencer Marketing agency specialise in matching brands with the Arab world’s top influencers and celebrities.",
      bkc: "#FF9513",
    },
  ];
  return (
    <>
   
      <Box bg={colorMode === "light" ? "#F9FAFB" : 'black'} py="100px">
        <Container maxW="1280px">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block">
              <ReusableHeading
                text="-What We Do-"
                secProp="#E6F3FF"
                thirdProp="#0083FF"
              />
            </Box>
            <Heading color={colorMode === "light" ? "#2D3958" : 'white'} as="h1" my="20px" textAlign={{base:'center',md:'start'}} fontSize={{base:'20px',md:'20'}}>
              We’re Offering Diverse Influencer Services
            </Heading>
            <Text textAlign="center" maxW="600px"  color={colorMode === "light" ? "#6E7CA0" : 'white'}>
              Arabia Talents is an agency that offers 360° marketing and
              operation services to brands seeking to increase their presence in
              the Arab world.
            </Text>
          </Box>

          <Box
            my="50px"
            display="flex"
            justifyContent={{base:'center',md:'between'}}
            alignItems={{base:'center',md:'between'}}
            gap={{base:'16',md:'10'}}
            flexDirection={{base:'column',md:'row'}}
          >
            {cardData.map((item, index) => (
              <CardReusable
                key={index}
                number={item.number}
                heading={item.heading}
                text={item.text}
                bkc={item.bkc}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}


export default Services