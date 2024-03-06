import React, { useState } from "react";
import { Box, Image, VStack, Text, Link, Divider } from "@chakra-ui/react";
import home from "../assets/image/home.svg";
import home2 from "../assets/image/home2.svg";
import shorts from "../assets/image/shorts.svg";
import subscription2 from "../assets/image/subcription.svg";
import subscription1 from "../assets/image/subcription1.svg";
import you from "../assets/image/you_icon.svg";
import youTube_icon from "../assets/image/youtube-logo-png-black.png";
import { RiMenuLine } from "@remixicon/react";
import user from "../assets/image/profile.svg";
import Sidebar from "./Sidebar";

const Bigsidebar = () => {
  const [Menu, setMenu] = useState(true);
  return (
    <>
      <Box
        w={"230px"}
        h={"490px"}
        pos={"absolute"}
        left={"0"}
        top={"50px"}
        color={"black"}
      >
        {/* <Box
          display={"flex"}
          w={"150px"}
          h={"60px"}
          pl={2}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <RiMenuLine
            pos={"relative"}
            cursor={"pointer"}
            
            color="black"
          />
          
          <Link href="/">
            <Image h={"20px"} src={youTube_icon} alt="" />
          </Link>
        </Box> */}

        <VStack p={"10px"}>
          <Link
            display={"flex"}
            h={"40px"}
            w={"99%"}
            alignItems={"center"}
            pl={"10px"}
            cursor={"pointer"}
            _hover={{ bg: "#F8F8F8", borderRadius: "10px" }}
            fontSize={"15px"}
            href="/"
          >
            <Image h={"23px"} src={home2} />
            <Text ml={"16px"}>Home</Text>
          </Link>
          <Link
            display={"flex"}
            h={"40px"}
            w={"99%"}
            alignItems={"center"}
            pl={"10px"}
            cursor={"pointer"}
            _hover={{ bg: "#F8F8F8", borderRadius: "10px" }}
            fontSize={"15px"}
            href="/"
          >
            <Image h={"23px"} src={shorts} />
            <Text ml={"16px"}>Shorts</Text>
          </Link>
          <Link
            display={"flex"}
            h={"40px"}
            w={"99%"}
            alignItems={"center"}
            pl={"10px"}
            cursor={"pointer"}
            _hover={{ bg: "#F8F8F8", borderRadius: "10px" }}
            fontSize={"15px"}
          >
            <Image h={"23px"} src={subscription1} />
            <Text ml={"16px"}>Subscriptions</Text>
          </Link>
          <Divider />
          <Link
            display={"flex"}
            h={"40px"}
            w={"99%"}
            alignItems={"center"}
            pl={"10px"}
            cursor={"pointer"}
            _hover={{ bg: "#F8F8F8", borderRadius: "10px" }}
            fontSize={"15px"}
          >
            <Image h={"23px"} src={you} />
            <Text ml={"16px"}>You</Text>
          </Link>
          <Link
            display={"flex"}
            h={"40px"}
            w={"99%"}
            alignItems={"center"}
            pl={"10px"}
            cursor={"pointer"}
            _hover={{ bg: "#F8F8F8", borderRadius: "10px" }}
            fontSize={"15px"}
          >
            <Image h={"23px"} src={you} />
            <Text ml={"16px"}>You</Text>
          </Link>
          <Divider />
          <Box p={2}>
            <Text fontSize={"15px"}>
              Sign in to like videos, comment and subscribe.
            </Text>
            <Link
              w={"90px"}
              border={"1px solid #CCCCCC"}
              p={"4px  7px"}
              ml={5}
              borderRadius={"60px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              _hover={{ bg: "blue.100" }}
              href="/"
            >
              <Image boxSize={"25px"} src={user} />
              <Text
                textColor={"blue.500"}
                ml={1}
                fontWeight={"600"}
                fontSize={"14px"}
              >
                Sign in
              </Text>
            </Link>
          </Box>
          <Box>
            <Image src="" />
            <Text></Text>
          </Box>
          <Box>
            <Image src="" />
            <Text></Text>
          </Box>
          <Box>
            <Image src="" />
            <Text></Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Bigsidebar;
