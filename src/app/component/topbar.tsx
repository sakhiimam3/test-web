"use client";
import {
  Box,
  Button,
  Container,
  ListItem,
  OrderedList,
  SimpleGrid,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { color } from "framer-motion";

const TopBar = () => {
  return (
    <>
      <Box maxW="full" bg="#EBEEF6">
        <Container maxW="1280" py="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box display="flex" bg="transparent" alignItems="center">
                <AiOutlineGlobal color="#6E7CA0" />
                <select
                  style={{ background: "transparent", color: "#6E7CA0" }}
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  {/* Add more language options here */}
                </select>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Stack direction="row" alignItems="center">
                <Text color="#6E7CA0">Light</Text>
                <Switch colorScheme="blue" size="md" />
                <Text color="#6E7CA0">Dark</Text>
              </Stack>
            </Box>
            <Box display="flex" alignContent="center" justifyContent="center">
              <OrderedList
                sx={{ listStyle: "none", color: "#6E7CA0" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap="20px"
              >
                <ListItem cursor="pointer">
                  <FaFacebookF />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaTwitter />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaInstagram />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaTiktok />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaLinkedin />
                </ListItem>
                <ListItem cursor="pointer">
                  <FaYoutube />
                </ListItem>
              </OrderedList>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TopBar;
