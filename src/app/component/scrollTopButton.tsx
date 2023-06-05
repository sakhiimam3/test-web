import { Box, useColorMode } from '@chakra-ui/react';
import { Link } from "react-scroll";
import { HiArrowUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      position="fixed"
      bottom="1rem"
      right="1rem"
      zIndex="9999"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.3s"
    >
      <Link to="top" smooth={true} duration={500}>
        <Box
          bg={colorMode === "light" ? "#0083FF" : "gray.700"}
          color={colorMode === "light" ? "white" : "white"}
          p={3}
          borderRadius="8px"
          cursor="pointer"
          boxShadow="md"
          onClick={scrollToTop}
        >
          <HiArrowUp fontSize={20}/>
        </Box>
      </Link>
    </Box>
  );
};


export default ScrollToTopButton