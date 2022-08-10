import { Box, Image, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { HeaderWithoutProfile } from "../../organisms/layout/HeaderWithoutProfile";
import { TimeLine } from "../../organisms/layout/TimeLine";

type Props = {
  username?: string;
};

export const Profile: FC<Props> = () => {
  const [user, setUser] = useState<any>({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <HeaderWithoutProfile />

      <Box h={320} position="relative">
        <Image
          src="https://source.unsplash.com/random"
          w="100%"
          h={250}
          objectFit="cover"
        />
        <Image
          src={user.profilePicture || "/Pictures/noAvatar.png"}
          w={150}
          h={160}
          borderRadius="50%"
          objectFit="cover"
          position="absolute"
          left={0}
          right={0}
          m="auto"
          top={150}
        />
      </Box>
      <Text
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="25"
        marginBottom="10"
      >
        {user.username}
      </Text>

      <TimeLine username={username!} />
    </>
  );
};
