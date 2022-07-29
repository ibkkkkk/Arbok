import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

export const Register = () => {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Box bg="blue.50" w="lg" p={5} borderRadius="lg" shadow="lg">
        <Heading as="h1" size="lg" textAlign="center">
          Sample
        </Heading>
        <Divider my={4} />

        <Input placeholder="メールアドレスを入力" />
        <Input placeholder="パスワードを入力" marginTop={5} />
        <Stack spacing={5} marginTop={10}>
          <Button>ログイン</Button>
          <Button>新規登録</Button>
        </Stack>
      </Box>
    </Flex>
  );
};
