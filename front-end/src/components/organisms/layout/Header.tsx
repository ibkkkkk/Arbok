import React from "react";
import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Heading, Image, Box, useDisclosure } from "@chakra-ui/react";
import { MenuButton } from "../../atoms/MenuButton";
import { HeaderDrawer } from "../../molecules/user/HeaderDrawer";
export const Header = () => {
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
        <Box>
          <MenuButton onOpen={onOpen} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            cursor="pointer"
          >
            Sample
          </Heading>
        </Box>
        <Box
          px={3}
          display="Flex"
          alignItems="center"
          justifyContent="space-between"
          color="white"
          cursor="pointer"
        >
          <BellIcon mx={2} />
          <ChatIcon />
          <Image
            src="/Pictures/panda.png"
            alt=""
            borderRadius="50%"
            w="20px"
            h="20px"
            marginLeft={2}
            marginBottom={0.5}
            objectFit="cover"
          />
        </Box>
      </Box>
      <HeaderDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
