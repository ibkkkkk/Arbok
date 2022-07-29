import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

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
              src="/Pictures/hakone.png"
              w="38px"
              h="38px"
              borderRadius="50%"
              objectFit="cover"
              alignItems="center"
              marginLeft="1"
              marginTop="2"
            />
            <Text marginLeft="2" marginTop="2" fontWeight="bold" fontSize="15">
              {post.userID}
            </Text>
            <Text marginLeft="4" marginTop="2" fontSize="12">
              {post.date}
            </Text>
            <DragHandleIcon position="absolute" left="97%" />
          </Box>
          <Box w="90%" m="auto">
            <Text marginTop="5" marginBottom="3">
              {post.description}
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
