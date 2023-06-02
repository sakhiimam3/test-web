import { Box, Container, Heading, Highlight, Text } from "@chakra-ui/react";
import ButtonReusable from "./button";
import Image from "next/image";
import BannerTop from "../assets/images/bannerleft1Top.png";
import BannertoBack from "../assets/images/bannerLeft1.png";
import BannerBottom from "../assets/images/bannerleftBottom.png";
import BannerRight from "../assets/images/bannerRight.png";
import BannerRightBack from "../assets/images/bannerRightBack.png";

const Banner = () => {
  return (
    <>
      <Box maxW="full" bg="#F5F7FD" py="45px">
        <Container maxW="1280">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box position="relative">
              <Image src={BannertoBack} alt="banner" />
              <Box position="absolute" top="0" p="8">
                <Image className="img" src={BannerTop} alt="banner" />
              </Box>
              <Box position="absolute" bottom="-200px" right="0">
                <Image src={BannerBottom} alt="banner" />
              </Box>
            </Box>
            <Box>
              <Text
                textAlign="center"
                color="#6E7CA0"
                _before={{
                  content: "'\\2212'",
                  top: 0,
                  left: 0,
                  height: "0px",
                  color: "red",
                }}
                _after={{
                  content: "'\\2212'",
                  bottom: 0,
                  top: 0,
                  right: 0,
                  width: "100px",
                  height: "0px",
                  color: "red",
                }}
              >
                Connecting brands with Arabic Millennials.
              </Text>
              <Heading
                textAlign="center"
                fontSize="56px"
                my="10px"
                color="#2D3958"
              >
                Middle East <br />
                <span className="heading-border">   Influencers & on-air </span>
                Talent Agency
              </Heading>
              <Text textAlign="center" color="#6E7CA0" my="15px">
                Brands can reach their targeted audiences thanks to our managed{" "}
                <br />
                roster of content creators, Esports talents, and social media
                influencers.
              </Text>
              <Box display="flex" justifyContent="center" my="20px" gap="15px">
                <ButtonReusable text="content creators" secProp="#0083FF"  thirdProp="white" forThProp=""/>
                <ButtonReusable text="On-Air Talents" secProp="transparent"  thirdProp="black" forThProp="outline"/>
              </Box>
            </Box>
            <Box position="relative"zIndex="2">
              <Image src={BannerRight} alt="banner" />
              <Box position="absolute" bottom="170px" left="10px" zIndex="-1">
              <Image style={{width:"100px",height:'100px'}} src={BannerRightBack} alt="banner" />
              </Box>
         
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Banner;
