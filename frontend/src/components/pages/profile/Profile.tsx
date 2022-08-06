import { Box, Image, Text } from "@chakra-ui/react";

import { HeaderWithoutProfile } from "../../organisms/layout/HeaderWithoutProfile";
import { TimeLine } from "../../organisms/layout/TimeLine";
import { Users } from "../../../dummyData";
import { FC } from "react";

type Props = {};

export const Profile: FC<Props> = (props) => {
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
          src="/Pictures/panda.png"
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
        {Users[0].userid}
      </Text>

      <TimeLine />
    </>
  );
};
