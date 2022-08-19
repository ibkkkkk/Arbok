import React, { useContext } from "react";
import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Heading, Image, Box, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuButton } from "../../atoms/MenuButton";
import { HeaderDrawer } from "../../molecules/HeaderDrawer";
import { AuthContext } from "../../../state/AuthContext";

export const Header = () => {
  const { user } = useContext(AuthContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const onClickProfile = () => {
    navigate(`/profile/${user.username}`);
  };
  return (
    <>
      <Box
        bg="blue.500"
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <MenuButton onOpen={onOpen} />
        </Box>
        <Box display="flex" alignItems="center">
          <Heading
            paddingLeft={16}
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            cursor="pointer"
            onClick={onClickHome}
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
            src={
              user.profilePicture
                ? user.profilePicture
                : "/Pictures/noAvatar.png"
            }
            alt=""
            borderRadius="50%"
            w="20px"
            h="20px"
            marginLeft={2}
            marginBottom={0.5}
            objectFit="cover"
            onClick={onClickProfile}
          />
        </Box>
      </Box>
      <HeaderDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
