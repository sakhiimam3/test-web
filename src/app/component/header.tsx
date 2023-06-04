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
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import Logo from "../assets/images/logo.png";
import { Image } from "@chakra-ui/next-js";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import ButtonReusable from "./button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Box maxW="full" bg="#F5F7FD">
      <Container maxW="1280">
        <Box
          display="flex "
          justifyContent="space-between"
          alignItems="center"
          py="15px"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              sx={{ width: "70px", height: "50px" }}
              src={Logo}
              alt="Dan Abramov"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="600"
            color="#2D3958"
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
            <Link href="#" className="nav-link">
              <Menu>
                <MenuButton
                  as={Button}
                  bg="transparent"
                  color="#2D3958"
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
              href="/caseStudies"
              className={`nav-link ${
                pathname === "/caseStudies" ? "active" : ""
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
            <Link href="#" className="nav-link">
              <Menu>
                <MenuButton
                  as={Button}
                  bg="transparent"
                  color="#2D3958"
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

          <Box display="flex" justifyContent="space-around" alignItems="center">
            <ButtonReusable
              text="Let's Talk"
              secProp="#0083FF"
              thirdProp="white"
              forThProp=""
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
