import { Box, Image, Text } from "@chakra-ui/react";

export const Ibkkk = ({ user }) => {
  return (
    <>
      <Box>
        <Image src={user.photo} alt="" />
        <Text>{user.userID}</Text>
      </Box>
    </>
  );
};
