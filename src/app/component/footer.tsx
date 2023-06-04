"use client";
import React from "react";
import { Box, Container, ListItem, OrderedList, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/bottomLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box width="full" sx={{ backgroundColor: "#292F3A", color: "white" }}>
        <Container maxW="1280">
          <Box display="flex" justifyContent="center" py="20" gap="10">
            <Box width="40%">
              <Box display="flex" justifyContent="center" gap="10" mb="5">
                <Link href="#">Find Talent</Link>
                <Link href="#">Case Studies</Link>
              </Box>

              <hr style={{ marginBottom: "20px" }} />
              <Text textAlign="center" color="white">
                &copy; 2022 Arabia Talents, All rights reserved.
              </Text>
            </Box>
            <Box width="20%" display="flex" justifyContent="center">
              <Image src={Logo} alt="logo" />
            </Box>
            <Box width="40%">
              <OrderedList
                sx={{ listStyle: "none" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="20px"
              >
                <ListItem cursor="pointer">
                  <FaLinkedin size={20} />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaTwitter size={20} />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaFacebookF size={20} />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaInstagram size={20} />
                </ListItem>
                <ListItem cursor="pointer">
                  {" "}
                  <FaTiktok size={20} />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaYoutube />
                </ListItem>
              </OrderedList>
              <hr style={{ margin: "20px 0px", width: "100%" }} />
              <Box display="flex" justifyContent="center" gap="10">
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Privacy Policy</Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
