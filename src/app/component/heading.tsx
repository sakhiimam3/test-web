import React from 'react';
import { Button, Heading } from '@chakra-ui/react';
import { MdPlayArrow } from 'react-icons/md';

interface HeadingProps {
  text: string;
  secProp:string;
  thirdProp:string
}

const ReusableHeading: React.FC<HeadingProps> = ({ text,secProp ,thirdProp}) => {
  return (
    <>
    
     <Heading borderRadius="5px" as="h6" p="10px" textTransform="capitalize" bg={secProp} color={thirdProp}  fontSize="">
        {text}
      </Heading>
    </>
  );
};

export default ReusableHeading;
