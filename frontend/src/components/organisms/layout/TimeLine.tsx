import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

// import { Users } from "../../../dummyData";

export const TimeLine = (post: any) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/62d11d06adf1447a5b0ec111"
      );
      console.log(response);
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
        {/* {Users.map((post: any) => (
          <Post post={post} key={post.id} />
        ))} */}
      </Box>
    </>
  );
};
