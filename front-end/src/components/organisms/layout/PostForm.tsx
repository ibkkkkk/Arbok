import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

export const PostForm = () => {
  return (
    <>
      <Box display="flex" h={100}>
        <Image
          src="/Pictures/panda.png"
          alt="panda"
          borderRadius="50%"
          object-fit="cover"
          w="35px"
          h="35px"
          m="auto"
        />

        <Input
          w="90%"
          placeholder="仲間を募集しよう！"
          my={5}
          variant="unstyled"
          size="lg"
        />
      </Box>

      <Box display="flex" position="relative">
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
        <Box display="flex">
          <Button my={3} size="sm" position="fixed" right="300">
            投稿
          </Button>
        </Box>

        <Divider marginTop={45} />
      </Box>
      <Box marginTop={20} paddingLeft={4}>
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
    </>
  );
};
