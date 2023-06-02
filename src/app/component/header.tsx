"use client";
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
  MenuButton ,
  MenuList ,
  MenuItem ,
  Stack,
  Button,
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.png";
import { Image } from "@chakra-ui/next-js";
import {RiArrowDownSLine} from "react-icons/ri"
import Link from "next/link";
import ButtonReusable from "./button";



export default function Navbar() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/About" },
    { title: "contact", link: "/Contact" },
    { title: "Services", link: "/Services" },
  ];
  return (
    <Box maxW="full"bg="#F5F7FD">
    <Container maxW="1280">
      <Box display="flex " justifyContent="space-between" alignItems="center" py="15px" >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            sx={{ width: "70px", height: "50px" }}
            src={Logo}
            alt="Dan Abramov"
          />
        </Box>
        <Box display="flex"  justifyContent="center" alignItems="center" fontWeight="600" color="#2D3958" gap="15px">
    
            <Link href="/">
              Home
            </Link>
            <Link  href="/Services">
              Services
            </Link>
            <Link href="#" >
              <Menu>
                <MenuButton as={Button} bg="transparent"color="#2D3958" rightIcon={<RiArrowDownSLine />}>
               Talents
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                </MenuList>
              </Menu>
            </Link>
            <Link href="/caseStudies">
               case studies
            </Link>
            <Link href="/caseStudies">
                About Us
             </Link>
             <Link href="#" >
              <Menu>
                <MenuButton as={Button} bg="transparent" color="#2D3958" rightIcon={<RiArrowDownSLine />}>
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
        <Box display="flex" justifyContent="space-around" alignItems="center">
        <ButtonReusable text="Let's Talk" secProp="#0083FF"  thirdProp="white" />
        </Box>
      </Box>
    </Container>
    </Box>
  );
}
