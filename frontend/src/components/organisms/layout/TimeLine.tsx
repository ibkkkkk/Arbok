import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../state/AuthContext";

import { Post } from "../../molecules/post/Post";

type Props = {
  username: string;
};

export const TimeLine: FC<Props> = ({ username }) => {
  const [posts, setPosts] = useState<any>([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`) //profile
        : await axios.get(`/posts/timeline/${user._id}`); // home
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);

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
