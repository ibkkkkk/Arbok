import { Box, Text, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../organisms/layout/Header";
import { PostForm } from "../../molecules/post/PostForm";
import { UserCard } from "../../molecules/user/UserCard";
import { AuthContext } from "../../../state/AuthContext";
import { UserModal } from "../../molecules/user/UserModal";
import { useSelected } from "../../../customHooks/useSelected";
import { useUsers } from "../../../customHooks/useUsers";

export const Home = memo(() => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`posts/timeline/${posts._id}`);
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [user._id]);

  // useEffect(() => getPosts(), []);

  const onClickUser = () => {
    onOpen();
  };

  return (
    <>
      <Header />
      <Box w="100%">
        <Box h={285} boxShadow="4px 2px 15px -9px #65789f" m={3}>
          <PostForm />
        </Box>

        <Text align="center" fontWeight="bold" marginBottom={3}>
          募集一覧
        </Text>

        <Box marginLeft={1}>
          {
            <Wrap p={3} spacingX={4}>
              {posts.map((post) => (
                <WrapItem key={post.id} mx="auto">
                  <UserCard
                    post={post}
                    // img={posts.profilePicture}
                    // username={post.username}
                    onClick={onClickUser}
                  />
                </WrapItem>
              ))}
            </Wrap>
          }
        </Box>
      </Box>
      <UserModal isOpen={isOpen} onClose={onClose} post={posts} />
    </>
  );
});
