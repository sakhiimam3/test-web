"use client";
import { Box, Container, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import ReusableHeading from "./heading";
import Talent1 from "../assets/images/talent1.png";
import Talent2 from "../assets/images/talent2.png";
import Talent3 from "../assets/images/talent3.png";
import Talent4 from "../assets/images/talent4.png";
import Talent5 from "../assets/images/talent5.png";
import Talent6 from "../assets/images/talent6.png";
import Image from "next/image";

const Partners:React.FC = () => {
  const { colorMode } = useColorMode();
  const images = [Talent1, Talent2, Talent3, Talent4, Talent5, Talent6];
  return (
    <>
      <Box my="28">
        <Container maxW="1280">
          <Box display="flex" justifyContent="center" mb="10">
            <Box>
              <Box display="flex" justifyContent="center" mb="5">
                <ReusableHeading
                  text="-Clients and Partners-"
                  secProp="#FFF1ED"
                  thirdProp="#FF7342"
                />
              </Box>
              <Heading as="h2" fontWeight="medium" color={colorMode === "light" ? "#2D3958" : 'white'} textAlign={{base:'center'}}>
                Thank you for supporting our talents
              </Heading>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent={{base:'center',md:"space-between"}}
            alignItems="center"
            flexWrap="wrap"
            gap="20px"
          >
            {images.map((img, index) => (
              <Box maxWidth={{ base: "100%", md: "150px" }}>
                <Image src={img} alt={`talent-${index}`} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Partners;
