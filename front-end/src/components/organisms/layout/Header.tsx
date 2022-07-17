import React from "react";
import { BellIcon, ChatIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, Heading, Input, Box } from "@chakra-ui/react";
export const Header = () => {
  return (
    <>
      <Flex bg="blue.600" py={2} alignItems="center" justify="space-between">
        <Flex as="a" align="center">
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            cursor="pointer"
          >
            Sample
          </Heading>
        </Flex>
        <Flex align="center">
          <SearchIcon w={6} h={4} cursor="pointer" color="white" />
          <Input
            placeholder="検索する"
            h={7}
            borderRadius="25px"
            variant="filled"
          />
        </Flex>
        <Flex px={3} align="center" color="white" cursor="pointer">
          <BellIcon mx={2} />
          <ChatIcon />
        </Flex>
      </Flex>
    </>
  );
};
