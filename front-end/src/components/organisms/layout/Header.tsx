import React from "react";
import { BellIcon, ChatIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, Heading, Input, Image } from "@chakra-ui/react";
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
            mx={2}
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
          <Image
            src="/Pictures/panda.png"
            alt=""
            borderRadius="50%"
            object-fit="cover"
            w="50px"
            h="50px"
          />
        </Flex>
      </Flex>
    </>
  );
};
