import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md";
import ButtonReusable from "./button";

interface CardProps {
  number: string;
  heading: string;
  text: string;
  bkc: string;
}

const CardReusable: React.FC<CardProps> = ({ number, heading, text, bkc }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Card bg={colorMode === "light" ? "#FFFFFF": "white"} maxW="370px"  px="20px" borderRadius="12px"  >
        <CardHeader>
          <Box  position="relative">
            <Box
              my="10px"
              width="50px"
             
            
              height="50px"
              borderRadius="100px"
              bg={bkc}
              opacity="0.1"
            ></Box>
            <Text
              fontSize="20px"
              position="absolute"
              color={colorMode === "light" ? "#2D3958": "black"}
            
              fontWeight="bold"
              letterSpacing="-1"
              top="10px"
              left="-8px"
            
            >
              {number}
            </Text>
          </Box>

          <Heading size="md" mt="20px"> {heading}</Heading>
        </CardHeader>
        <CardBody>
          <Text color={colorMode === "light" ? "#6E7CA0": "black"}>{text}</Text>
        </CardBody>
        <CardFooter>
          <ButtonReusable
            text="LEARN MORE"
            secProp="transparent"
            thirdProp="#2D3958"
            forThProp=""
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default CardReusable;
