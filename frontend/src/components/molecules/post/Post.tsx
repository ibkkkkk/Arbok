import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { format } from "timeago.js";

// import { Users } from "../../../dummyData";

type Props = {
  post: any;
};

export const Post: FC<Props> = (props) => {
  const { post } = props;

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Box
        w="90%"
        maxHeight="390"
        m="auto"
        marginTop="5"
        boxShadow="4px 2px 15px -9px #65789f"
        paddingBottom="10"
      >
        <Box>
          <Box display="flex" alignItems="center" position="relative">
            <Image
              src={user.profilePicture || "/Pictures/noAvatar.png"}
              w="38px"
              h="38px"
              borderRadius="50%"
              objectFit="cover"
              alignItems="center"
              marginLeft="1"
              marginTop="2"
            />
            <Text marginLeft="2" marginTop="2" fontWeight="bold" fontSize="15">
              {user.username}
            </Text>
            <Text marginLeft="4" marginTop="2" fontSize="12">
              {format(post.createdAt)}
            </Text>
            <DragHandleIcon position="absolute" left="95%" />
          </Box>
          <Box w="90%" m="auto">
            <Text marginTop="5" marginBottom="3">
              {post.description}
            </Text>
            <Image
              src={post.img}
              alt=""
              objectFit="contain"
              w="100%"
              maxHeight="250px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
