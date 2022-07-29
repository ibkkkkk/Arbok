import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Users } from "../../../dummyData";
import { Post } from "../../molecules/post/Post";

export const TimeLine = (post: any) => {
  return (
    <>
      <hr />
      <Text textAlign="center" marginTop="10" fontWeight="bold">
        投稿一覧
      </Text>

      <Box>
        {Users.map((post: any) => (
          <Post post={post} key={post.id} />
        ))}
      </Box>
    </>
  );
};
