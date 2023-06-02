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
  return (
    <>
      <Card bg="#fffff" maxW="370px"  px="20px" borderRadius="12px" border="1px" borderWidth="medium" borderColor="#E7E5EA" >
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
              color="#2D3958"
              fontWeight="bold"
              letterSpacing="-1"
              top="10px"
              left="-8px"
            >
              {number}
            </Text>
          </Box>

          <Heading size="md"> {heading}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{text}</Text>
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
