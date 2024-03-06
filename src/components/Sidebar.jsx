import React, { useState } from "react";
import {

  Box,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import home from "../assets/image/home.svg";
import home2 from "../assets/image/home2.svg";
import shorts from "../assets/image/shorts.svg";
import subscription2 from "../assets/image/subcription.svg";
import subscription1 from "../assets/image/subcription1.svg";
import you from "../assets/image/you_icon.svg";

const Sidebar = () => {
  
  const [Home, setHome] = useState(true);
  return (
    <>
      <Box w={"75px"} h={"490px"} pos={"absolute"}
      top="50px" left="10px" color={"black"} >
        <VStack>
          <Box
            pt={"10px"}
            pb={"10px"}
            width={"70px"}
            h={"70px"}
            // border={"1px solid black"}
            cursor={"pointer"}
            fontSize={"10px"}
            _hover={{
              bg: "#F8F8F8",
              borderRadius: "10px",
            
            }}
            onClick={()=>{setHome(!Home)}}
          >
            {Home ? (
              <Image boxSize={6} m={"auto"} mb={"2px"} src={home} />
            ) : (
              <Image boxSize={6} m={"auto"} mb={"2px"} src={home2} />
            )}
            <Text textAlign={"center"} pt={1}>
              Home
            </Text>
          </Box>
          <Box
            pt={"10px"}
            pb={"10px"}
            width={"70px"}
            h={"70px"}
            // border={"1px solid black"}
            cursor={"pointer"}
            fontSize={"10px"}
            _hover={{
              bg: "#F8F8F8",
              borderRadius: "10px",
            }}
          >
            <Image boxSize={6} m={"auto"} src={shorts} />
            <Text textAlign={"center"} pt={1}>
              Shorts
            </Text>
          </Box>
          <Box
            pt={"10px"}
            pb={"10px"}
            width={"70px"}
            h={"70px"}
            // border={"1px solid black"}
            cursor={"pointer"}
            fontSize={"10px"}
            _hover={{
              bg: "#F8F8F8",
              borderRadius: "10px",
            }}
          >
            <Image boxSize={6} m={"auto"} mb={"2px"} src={subscription1} />
            <Text textAlign={"center"} pt={1}>
              Subscriptions
            </Text>
          </Box>
          <Box
            pt={"10px"}
            pb={"10px"}
            width={"70px"}
            h={"70px"}
            // border={"1px solid black"}
            cursor={"pointer"}
            fontSize={"10px"}
            _hover={{
              bg: "#F8F8F8",
              borderRadius: "10px",
            }}
          >
            <Image boxSize={6} m={"auto"} mb={"2px"} src={you} />
            <Text textAlign={"center"} pt={1}>
              You
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;
