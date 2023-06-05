"use client";
import { useState } from "react";

import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  OrderedList,
  SimpleGrid,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  Stack,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/bottomLogo.png"
import { Image } from "@chakra-ui/next-js";
import { RiArrowDownSLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import ButtonReusable from "./button";
import { usePathname } from "next/navigation";

const Navbar:React.FC=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
const { colorMode } = useColorMode();


  const pathname = usePathname();
  return (
    <Box maxW="full" bg={colorMode ==='light'? "#F5F7FD":'black'}  position="sticky" top="0" zIndex="99">
      <Container maxW="1280">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="15px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml={{ base: "30px", md: "0" }}
          >
            <Image
              sx={{ width: "auto", height: "50px" }}
              src={colorMode === "light"? Logo : Logo2}
              alt="Dan Abramov"
            />
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            fontWeight="600"
            color={colorMode === "light" ?"#2D3958" :"white"}
            gap="15px"
          >
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/Services"
              className={`nav-link ${pathname === "/Services" ? "active" : ""}`}
          

            >
              Services
            </Link>
            <Link href="/Talent" className="nav-link">
              <Menu>
                <MenuButton
                  as={Button}
                  bg="transparent"
                  color={colorMode ==='light'? "#2D3958":'"black"'}
                  rightIcon={<RiArrowDownSLine />}
                >
                  Talents
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                </MenuList>
              </Menu>
            </Link>
            <Link
              href="/CaseStudies"
              className={`nav-link ${
                pathname === "/CaseStudies" ? "active" : ""
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/About"
              className={`nav-link ${pathname === "/About" ? "active" : ""}`}
            >
              About Us
            </Link>
            <Link href="/Branches" className="nav-link">
              <Menu>
                <MenuButton
                  as={Button}
                  bg="transparent"
                  color={colorMode ==='light'? "#2D3958":'"black"'}
                  rightIcon={<RiArrowDownSLine />}
                >
                  Branches
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                </MenuList>
              </Menu>
            </Link>
          </Box>

          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems="center"
          >
            <ButtonReusable
              text="Let's Talk"
              secProp="#0083FF"
              thirdProp="white"
              forThProp=""
            />
          </Box>

          {/* side bar on toogle  */}

          <Box display={{ base: "block", md: "none" }} bg={colorMode === "light" ? "":"black"}>
            <Button onClick={onOpen} cursor="pointer">
              <FaBars  color={colorMode === "light" ? "grey":"white"} />
            </Button>
            <Drawer onClose={onClose}  isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader
                  borderBottomWidth="1px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text    color={colorMode === "light" ? "#2D3958":"white"} >Menu</Text>
                  <Text color="white" bg={colorMode === "light" ? "":"white"} fontSize={20}>
                    <GrClose onClick={onClose} />
                  </Text>
                </DrawerHeader>
                <DrawerBody>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontWeight="600"
                    color={colorMode === "light" ? "#2D3958":"white"}
                    flexDirection="column"
                    gap="15px"
                    my="10px"
                  >
                    <Link
                      href="/"
                      className={`nav-link ${pathname === "/" ? "active" : ""}`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/Services"
                      className={`nav-link ${
                        pathname === "/Services" ? "active" : ""
                      }`}
                    >
                      Services
                    </Link>
                    <Link href="/Talent" className="nav-link">
                      <Menu>
                        <MenuButton
                          as={Button}
                          bg="transparent"
                          color={colorMode ==='light'? "#2D3958":'"black"'}
                          rightIcon={<RiArrowDownSLine />}
                        >
                          Talents
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                        </MenuList>
                      </Menu>
                    </Link>
                    <Link
                      href="/CaseStudies"
                      className={`nav-link ${
                        pathname === "/CaseStudies" ? "active" : ""
                      }`}
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/About"
                      className={`nav-link ${
                        pathname === "/About" ? "active" : ""
                      }`}
                    >
                      About Us
                    </Link>
                    <Link href="/Branches" className="nav-link">
                      <Menu>
                        <MenuButton
                          as={Button}
                          bg="transparent"
                          color={colorMode ==='light'? "#2D3958":'"black"'}
                          rightIcon={<RiArrowDownSLine />}
                        >
                          Branches
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                        </MenuList>
                      </Menu>
                    </Link>
                    <Box>
                      <ButtonReusable
                        text="Let's Talk"
                        secProp="#0083FF"
                        thirdProp="white"
                        forThProp=""
                      />
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}


export default Navbar