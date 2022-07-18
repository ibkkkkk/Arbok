import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  id: number;
  imgUrl: string;
  userName: string;
};
export const UserCard: FC<Props> = memo((props) => {
  const { id, imgUrl, userName } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={3}
      _hover={{ cursor: "pointer", opacity: 0.7 }}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          src={imgUrl}
          borderRadius="full"
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
      </Stack>
    </Box>
  );
});
