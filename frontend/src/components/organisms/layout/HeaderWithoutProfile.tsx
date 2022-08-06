import { Heading, Image, Box, Drawer, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { ArrowButton } from "../../atoms/ArrowButton";
import { FriendDrawer } from "../../molecules/friend/FriendDrawer";
export const HeaderWithoutProfile = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };
  return (
    <>
      <Box bg="blue.500" py={2} display="flex" alignItems="center">
        {/* <Box>
          <MenuButton onOpen={onOpen} />
        </Box> */}
        <Box m="auto">
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            cursor="pointer"
            paddingLeft={8}
            onClick={onClickHome}
          >
            Sample
          </Heading>
        </Box>
        <Box>
          <ArrowButton onOpen={onOpen} />
        </Box>
        {/* <HeaderDrawer onClose={onClose} isOpen={isOpen} /> */}
        <FriendDrawer onClose={onClose} isOpen1={isOpen} />
      </Box>
    </>
  );
};
