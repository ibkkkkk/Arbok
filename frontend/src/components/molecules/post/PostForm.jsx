import { AttachmentIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import axios from "axios";

import { AuthContext } from "../../../state/AuthContext";

export const PostForm = () => {
  const { user } = useContext(AuthContext);
  const description = useRef();
  const [post, setPost] = useState();
  const [file, setFile] = useState(null);

  console.log(file);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description: description.current.value,
    };

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
      setPost(post);
      console.log(post);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box display="flex" h={100} marginBottom={5} position="relative">
          <Image
            src={
              user.profilePicture
                ? user.profilePicture
                : "/Pictures/noAvatar.png"
            }
            alt=""
            borderRadius="50%"
            w="32px"
            h="32px"
            m="auto"
            objectFit="cover"
            zIndex="10"
          />

          <Box>
            <FormLabel htmlFor="file">
              <AttachmentIcon
                zIndex="100"
                cursor="pointer"
                position="absolute"
                top={3}
                right={4}
              />
              <Input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </FormLabel>
          </Box>

          {/* <form onSubmit={(e) => handleSubmit(e)}> */}
          <Input
            w="90%"
            placeholder="仲間を募集しよう！"
            variant="unstyled"
            size="md"
            ref={description}
            required
          />
        </Box>

        <Box>
          <Box display="flex">
            <Select placeholder="デバイス" size="xs" w="20%" marginRight={3}>
              <option value="option1">PS</option>
              <option value="option2">PC</option>
              <option value="option3">Switch</option>
            </Select>
            <Select placeholder="ゲームタイトル" size="xs" w="20%">
              <option value="option1">VALORANT</option>
              <option value="option2">APEX</option>
              <option value="option3">FORTNITE</option>
            </Select>
          </Box>
          <Box display="flex" justifyContent="flex-end" mx={75}>
            <Button
              size="sm"
              cursor="pointer"
              bg="blue.200"
              _hover={{ opacity: 0.7 }}
              color="grey.100"
              type="submit"
            >
              投稿
            </Button>
          </Box>

          {/* </form> */}
          <Divider marginTop={15} borderColor="blue.200" />
        </Box>
        <Box marginTop={3} paddingLeft={4}>
          <Text fontSize="sm">
            ※ 投稿内容によっては削除されることもあります。
          </Text>
          <Text fontSize="sm">
            ※ここは出会い系サイトではありません。異性との出会いを目的とした募集は禁止しています。
          </Text>
          <Text fontSize="sm">
            ※ 募集以外の書き込みに対しては削除＆規制する事があります。
          </Text>
        </Box>
      </form>
    </>
  );
};
