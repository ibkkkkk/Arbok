import {
  Box,
  Button,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Login = () => {
  return (
    <>
      <Box>
        <Box
          w="100v2"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
        >
          <Box w="70%" h="70%" display="flex">
            <Box
              flex="4"
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize="14" fontWeight="bold">
                FPS専門募集&交流アプリ
              </Text>
              <Text fontSize="40" fontWeight="bold" color="blue.400">
                Sample
              </Text>
            </Box>
            <Box
              flex="8"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                h="75%"
                w="90%"
                borderRadius="10"
                bg="white"
                p="10"
                shadow="md"
              >
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={3}
                  align="stretch"
                >
                  <Text textAlign="center" fontWeight="bold">
                    ログイン
                  </Text>
                  <Input placeholder="email" />
                  <Input placeholder="password" />
                  <Button
                    size="md"
                    bg="blue.200"
                    fontWeight="bold"
                    color="gray.700"
                    w="100%"
                    alignSelf="center"
                  >
                    ログイン
                  </Button>
                  <Text textAlign="center" marginTop="5">
                    パスワードを忘れた方
                  </Text>
                  <Button
                    size="sm"
                    bg="blue.200"
                    w="60%"
                    alignSelf="center"
                    fontSize="xs"
                  >
                    アカウント作成
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
