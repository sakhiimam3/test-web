import {
  Box,
  Container,
  Heading,
  Highlight,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ButtonReusable from "./button";
import Image from "next/image";
import BannerTop from "../assets/images/bannerleft1Top.png";
import BannertoBack from "../assets/images/bannerLeft1.png";
import BannerBottom from "../assets/images/bannerleftBottom.png";
import BannerRight from "../assets/images/bannerRight.png";
import BannerRightBack from "../assets/images/bannerRightBack.png";
import bannerLeftAbs1 from "../assets/images/bannerLeftAbsolute.png";
import bannerLeftAbs2 from "../assets/images/bannerleftAbsolue2.png";
import bannerRightAbs2 from "../assets/images/banRightAbs2.png";
import { BsMouse } from "react-icons/bs";
import { Link } from "react-scroll";


const Banner :React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box maxW="full" bg={colorMode === "light" ? "#F5F7FD" : "black"}>
        <Container maxW="1480">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={{ base: "28", md: "10" }}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "20", md: "0" }}
          >
            <Box position="relative" top="-60px">
              <Image src={BannertoBack} alt="banner" />
              <Box position="absolute" top="0" p="8">
                <Image className="img" src={BannerTop} alt="banner" />
              </Box>
              <Box
                position="absolute"
                top="3%"
                right={{ base: "-3%", md: "-10%" }}
              >
                <Image className="img" src={bannerLeftAbs1} alt="banner" />
              </Box>
              <Box position="absolute" bottom="-180px" right="0">
                <Image src={BannerBottom} alt="banner" />
              </Box>
            </Box>
            <Box position="relative" mt={{ base: "28", md: "0" }}>
              <Image
                style={{ position: "absolute", top: "50%", left: "-50px" }}
                src={bannerLeftAbs2}
                alt="banner"
              />
              <Text
                textAlign="center"
                color={colorMode === "light" ? "#6E7CA0" : "white"}
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
                fontSize={{ base: "20px", md: "56px" }}
                my="10px"
                color={colorMode === "light" ? "#2D3958" : "white"}
              >
                Middle East <br />
                <span className="heading-border">
                  {" "}
                  Influencers & on-air{" "}
                </span>{" "}
                <br />
                Talent Agency
              </Heading>
              <Text
                textAlign="center"
                fontSize={{ base: "14px", md: "16px" }}
                color={colorMode === "light" ? "#6E7CA0" : "white"}
                my="15px"
              >
                Brands can reach their targeted audiences thanks to our managed{" "}
                <br />
                roster of content creators, Esports talents, and social media
                influencers.
              </Text>
              <Box display="flex" justifyContent="center" my="20px" gap="15px">
                <ButtonReusable
                  text="content creators"
                  secProp="#0083FF"
                  thirdProp="white"
                  forThProp=""
                />
                <ButtonReusable
                  text="On-Air Talents"
                  secProp={colorMode === "light" ? "transparent" : "white"}
                  thirdProp={colorMode === "light" ? "black" : "black"}
                  forThProp="outline"
                />
              </Box>
            </Box>
            <Box position="relative" zIndex="2">
              <Image src={BannerRight} alt="banner" />
              <Box position="absolute" bottom="39%" left="10%" zIndex="-1">
                <Image
                  style={{ width: "100px", height: "100px" }}
                  src={BannerRightBack}
                  alt="banner"
                />
              </Box>
              <Box position="absolute" top="2%" right="-2%">
                <Image src={bannerRightAbs2} alt="banner" />
              </Box>
            </Box>
          </Box>
          <Box py="10" display="flex" justifyContent="center">
            <Link to="about" smooth={true} duration={500}>
              <BsMouse size={50} cursor="pointer" />
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Banner;
