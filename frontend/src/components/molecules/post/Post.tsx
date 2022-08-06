import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Users } from "../../../dummyData";

type Props = {
  post: any;
};

export const Post: FC<Props> = (props) => {
  const { post } = props;

  return (
    <>
      <Box
        w="90%"
        m="auto"
        marginTop="5"
        boxShadow="4px 2px 15px -9px #65789f"
        paddingBottom="10"
      >
        <Box>
          <Box display="flex" alignItems="center" position="relative">
            <Image
              src={Users.filter((user) => user.id === post.id)[0].photo}
              w="38px"
              h="38px"
              borderRadius="50%"
              objectFit="cover"
              alignItems="center"
              marginLeft="1"
              marginTop="2"
            />
            <Text marginLeft="2" marginTop="2" fontWeight="bold" fontSize="15">
              {Users.filter((user) => user.id === post.id)[0].userid}
            </Text>
            <Text marginLeft="4" marginTop="2" fontSize="12">
              {Users.filter((user) => user.id === post.id)[0].date}
            </Text>
            <DragHandleIcon position="absolute" left="97%" />
          </Box>
          <Box w="90%" m="auto">
            <Text marginTop="5" marginBottom="3">
              {Users.filter((user) => user.id === post.id)[0].description}
            </Text>
            <Image
              src="https://source.unsplash.com/random"
              objectFit="cover"
              w="100%"
              h="360"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
