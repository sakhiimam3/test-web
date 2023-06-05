import { Box, Container, ListItem, OrderedList, Stack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const TopBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorModeToggle = () => {
    toggleColorMode();
  };

  return (
    <Box maxW="full" bg={colorMode === "light" ? "#EBEEF6" : "black"}  >
      <Container maxW="1280" py="10px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "5", md: "0" }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" >
            <Box display="flex" bg="transparent" alignItems="center">
              <AiOutlineGlobal color={colorMode === "light"? "#6E7CA0": "white"}  />
              <select
                style={{ background: "transparent", color:colorMode === "light"? "#6E7CA0": "white" }}
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
              <Text color={colorMode === "light"? "#6E7CA0": "white"} >Light</Text>
              <Switch colorScheme="blue" size="md" onChange={handleColorModeToggle} />
              <Text color={colorMode === "light"? "#6E7CA0": "white"} >Dark</Text>
            </Stack>
          </Box>
          <Box display="flex" alignContent="center" justifyContent="center">
            <OrderedList
              sx={{ listStyle: "none",color:colorMode === "light"? "#6E7CA0": "white"}}
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
  );
};

export default TopBar;
