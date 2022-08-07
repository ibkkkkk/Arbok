import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Post } from "../../molecules/post/Post";
// import { Users } from "../../../dummyData";

export const TimeLine = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/62d11d06adf1447a5b0ec111"
      );
      console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <hr />
      <Text textAlign="center" marginTop="10" fontWeight="bold">
        投稿一覧
      </Text>

      <Box>
        {posts.map((post: any) => (
          <Post post={post} key={post._id} />
        ))}
      </Box>
    </>
  );
};
