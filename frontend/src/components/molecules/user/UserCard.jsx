import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, FC, useContext, useState, useEffect } from "react";

import axios from "axios";
import { AuthContext } from "../../../state/AuthContext";

// type Props = {
//   id: number;
//   imgUrl: string;
//   userName: string;
//   onClick: (id: number) => void;
// };
export const UserCard = memo((props) => {
  const { img, username, id, onClick, post } = props;

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/posts/${post._id}`); // home
      console.log(response.data);
    };
    fetchPosts();
  }, [post._id]);

  return (
    <Box
      w={200}
      h={210}
      borderRadius="5px"
      shadow="md"
      rounded="md"
      p={3}
      cursor="pointer"
      _hover={{
        transform: "scale(.95)",
        transition: "all .2s ease-out",
        border: "0px",
      }}
      // onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Box>
          <Image
            boxSize="100px"
            src={user.profilePicture}
            borderRadius="full"
            alt=""
            m="auto"
            objectFit="cover"
          />

          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            marginTop={4}
          >
            {user.username}
          </Text>
          <Text fontSize="sm" margin={2}>
            3分前
          </Text>
        </Box>
      </Stack>
    </Box>
  );
});
