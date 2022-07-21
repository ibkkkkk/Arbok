import React from "react";
import { BellIcon, ChatIcon, SearchIcon } from "@chakra-ui/icons";
import { Heading, Input, Image, Box } from "@chakra-ui/react";
export const Header = () => {
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
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            cursor="pointer"
            mx={2}
            paddingTop={0.5}
          >
            Sample
          </Heading>
        </Box>
        <Box display="flex" alignItems="center">
          <SearchIcon w={6} h={4} cursor="pointer" color="white" />
          <Input
            placeholder="検索する"
            h={7}
            borderRadius="25px"
            variant="filled"
          />
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
          />
        </Box>
      </Box>
    </>
  );
};
