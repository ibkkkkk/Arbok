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
      <Box display="flex" h={100} marginBottom={5}>
        <Image
          src="/Pictures/panda.png"
          alt="panda"
          borderRadius="50%"
          w="32px"
          h="32px"
          m="auto"
        />

        <Input
          w="90%"
          placeholder="仲間を募集しよう！"
          variant="unstyled"
          size="lg"
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
          >
            投稿
          </Button>
        </Box>

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
    </>
  );
};
