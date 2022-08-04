import {
  Box,
  Button,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Register = () => {
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
                    新規登録
                  </Text>
                  <Input placeholder="表示ID(gameID)" />
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
                    アカウント作成
                  </Button>
                  <Button
                    size="sm"
                    bg="blue.200"
                    w="60%"
                    alignSelf="center"
                    fontSize="xs"
                  >
                    ログイン
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
