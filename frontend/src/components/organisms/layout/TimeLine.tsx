import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";

import { Post } from "../../molecules/post/Post";
// import { Users } from "../../../dummyData";

type Props = {
  username: string;
};

export const TimeLine: FC<Props> = ({ username }) => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/62d11d06adf1447a5b0ec111");
      console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

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
