import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  id: number;
  imgUrl: string;
  userName: string;
};
export const UserCard: FC<Props> = memo((props) => {
  const { imgUrl, userName } = props;
  return (
    <Box
      w="130px"
      h="130px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={3}
      _hover={{ cursor: "pointer", opacity: 0.7 }}
    >
      <Stack textAlign="center">
        <Image
          boxSize="50px"
          src={imgUrl}
          borderRadius="full"
          alt={userName}
          m="auto"
        />
        <Text fontSize="sm" fontWeight="bold">
          {userName}
        </Text>
      </Stack>
    </Box>
  );
});
