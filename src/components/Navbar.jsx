import  { useState } from "react";
import {
  Container,
  Box,
  Image,
  Flex,
  Spacer,
  InputGroup,
  Input,
  InputRightElement,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import youTube_icon from "../assets/image/youtube-logo-png-black.png";
import {
  RiMenuLine,
  RiMicFill,
  RiMore2Fill,
  RiMore2Line,
  RiSearchLine,
} from "@remixicon/react";
import create from "../assets/image/create.svg";
import notification from "../assets/image/notification.svg";
import user from "../assets/image/profile.svg";
import Sidebar from "./Sidebar";
import Bigsidebar from "./Bigsidebar";

const Navbar = () => {
  const [Menu, setMenu] = useState(true)
  return (
    <>
      <Container maxW="100%" h={"60px"} color="white">
        <Flex>
          <Box
            display={"flex"}
            w={"130px"}
            h={"60px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <RiMenuLine
              pos={"relative"}
              cursor={"pointer"}
              onClick={() => {
                setMenu(!Menu);
              }}
              color="black"
            />
            {Menu ? <Sidebar /> : <Bigsidebar />}
            <Link href="/">
              <Image h={"20px"} src={youTube_icon} alt="" />
            </Link>
          </Box>
          <Spacer />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"650px"}
          >
            <InputGroup>
              <Input
                color={"black"}
                borderRadius={"20px"}
                h={"40px"}
                placeholder="Search"
              />
              <InputRightElement
                w={"60px"}
                bg={"#F8F8F8"}
                borderRightRadius={"20px"}
                border={"1px solid #CCCCCC"}
              >
                <RiSearchLine color="black" />
              </InputRightElement>
            </InputGroup>
            <Box
              ml={"15px"}
              bg={"#F8F8F8"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"40px"}
              w={"43px"}
              borderRadius={"50%"}
            >
              <RiMicFill size={"20px"} color="black" />
            </Box>
          </Box>

          <Spacer />
          <Box display={"flex"} alignItems={"center"}>
            <RiMore2Line color="black" />
            <Link
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
          <Box display={"none"} alignItems={"center"}>
            <Image src={create} />
            <Image ml={"8"} src={notification} />
            <Image boxSize={"35px"} ml={"8"} src={user} />
          </Box>
        </Flex>
        <Menu>
          <Image boxSize={"25px"} src={user} />
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </>
  );
};

export default Navbar;
