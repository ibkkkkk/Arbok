import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  id: number;
  imgUrl: string;
  userName: string;
  onClick: (id: number) => void;
};
export const UserCard: FC<Props> = memo((props) => {
  const { imgUrl, userName, id, onClick } = props;
  return (
    <Box
      w={200}
      h={220}
      borderRadius="5px"
      shadow="md"
      p={3}
      _hover={{ cursor: "pointer", opacity: 0.7 }}
      onClick={() => onClick(id)}
      bg="white.900"
    >
      <Stack textAlign="center">
        <Box>
          <Image
            boxSize="100px"
            src={imgUrl}
            borderRadius="full"
            alt={""}
            m="auto"
          />

          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
});
