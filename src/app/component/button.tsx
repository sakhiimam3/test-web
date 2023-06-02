import React from "react";
import { Button } from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md";

interface ButtonProps {
  text: string;
  secProp: string;
  thirdProp: string;
  forThProp: string;
}

const ButtonReusable: React.FC<ButtonProps> = ({
  text,
  secProp,
  thirdProp,
  forThProp,
}) => {
  return (
    <>
      <Button
        rightIcon={<MdPlayArrow />}
        textTransform="capitalize"
        bg={secProp}
        style={{ border: `${forThProp ? "1px solid black" : ""}` }}
        color={thirdProp}
        border="none"
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonReusable;
