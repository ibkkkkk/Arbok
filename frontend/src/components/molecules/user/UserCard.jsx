import { Box, Image, Stack, Text, Flex } from "@chakra-ui/react";
import { memo, FC, useContext, useState, useEffect } from "react";
import { format } from "timeago.js";
import axios from "axios";

import { AuthContext } from "../../../state/AuthContext";

// type Props = {
//   id: number;
//   imgUrl: string;
//   userName: string;
//   onClick: (id: number) => void;
// };
export const UserCard = memo((props) => {
  const { img, username, onClick, post } = props;

  // const { user } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

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
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Box>
          <Flex justifyContent="space-between" w="100%">
            <Text bg="#cde4ff" w="25%" fontSize="sm" marginLeft={2}>
              {post.device}
            </Text>

            <Text bg="#fff8e8" fontSize="sm" marginRight={2}>
              {post.title}
            </Text>
          </Flex>
          <Image
            boxSize="90px"
            src={user.profilePicture || "/Pictures/noAvatar.png"}
            borderRadius="full"
            alt=""
            m="auto"
            objectFit="cover"
            marginTop="3"
          />

          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            marginTop={3}
          >
            {user.username}
          </Text>
          <Text fontSize="sm" margin={1}>
            {format(post.createdAt)}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
});
