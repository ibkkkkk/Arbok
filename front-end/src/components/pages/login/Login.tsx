import { Box, Text } from "@chakra-ui/react";

export const Login = () => {
  return (
    <>
      <Box>
        <Box
          w="100v2"
          h="100vh"
          bg="cyan.50"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box w="70%" h="70%" bg="green" display="flex">
            <Box
              flex="7"
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
              flex="5"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text>dddd</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
