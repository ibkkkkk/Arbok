import React, { memo, useCallback } from "react";
import { Heading, Image, Box, Drawer, useDisclosure } from "@chakra-ui/react";

import { ArrowButton } from "../../atoms/ArrowButton";
import { FriendDrawer } from "../../molecules/friend/FriendDrawer";
export const HeaderWithoutProfile = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Box
        bg="blue.500"
        py={2}
        display="flex"
        textAlign="center"
        justifyContent="space-between"
      >
        {/* <Box>
          <MenuButton onOpen={onOpen} />
        </Box> */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m="auto"
        >
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            cursor="pointer"
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
