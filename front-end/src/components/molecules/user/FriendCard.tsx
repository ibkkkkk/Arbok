import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  id: number;
  imgUrl: string;
  userName: string;
  onClick: (id: number) => void;
};
export const FriendCard: FC<Props> = memo((props) => {
  const { imgUrl, userName, id, onClick } = props;
  return (
    <Box
      borderRadius="5px"
      shadow="md"
      rounded="md"
      p={3}
      cursor="pointer"
      _hover={{
        transform: "scale(.95)",
        transition: "all .2s ease-out",
        border: "0px",
      }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Box>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            marginTop={4}
          >
            {userName}
          </Text>
          <Image
            boxSize="100px"
            src={imgUrl}
            borderRadius="full"
            alt={""}
            m="auto"
          />
        </Box>
      </Stack>
    </Box>
  );
});
