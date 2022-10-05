// defaultValue
import { memo, FC, useState, useEffect, useContext, useCallback } from "react";
import {
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../../../state/AuthContext";

export const UserModal = memo((props) => {
  const { isOpen, onClose, post } = props;
  // const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  // const getPosts = useCallback(() => {
  //   const fetchPosts = async () => {
  //     const response = await axios.get(`/posts/timeline/${user._id}`);
  //     console.log(response.data);
  //     setPosts(response.data);
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      console.log(response);
      setPosts(response.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      size="lg"
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent
          pb={4}
          bg="blackAlpha.700"
          color="#eee"
          borderRadius="lg"
          w="100%"
        >
          <ModalHeader textAlign="center" fontSize="xl">
            <Image
              src="/Pictures/hakone.png"
              borderRadius="100%"
              w="80px"
              h="80px"
              m="auto"
              marginTop="5"
              objectFit="cover"
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4} textAlign="center">
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>ID</FormLabel>
                <Input value={posts.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>タイトル</FormLabel>
                <Input value="VALORANT" isReadOnly />
              </FormControl>
              <FormControl overflow="break-word">
                <FormLabel>コメント</FormLabel>
                <Textarea value="" h={200} overflow="break-word" readOnly>
                  アンレート @1 VC:discord アイアン〜シルバーくらいの方
                  初心者歓迎です！ 雑談しながら楽しくやりましょう #VALORANT募集
                </Textarea>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
