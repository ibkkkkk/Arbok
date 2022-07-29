import { memo, FC } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Users } from "../../../../dummyData";

type Props = {
  onClose: () => void;
  isOpen1: boolean;
};

export const FriendDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen1 } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen1}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="blue.50">
            <Box marginTop={3}>
              <Text textAlign="center" marginBottom={3} fontWeight="bold">
                オンラインの友達
              </Text>
              <Stack>
                <Box>
                  {Users.map((user) => (
                    <Box
                      h="120"
                      display="flex"
                      justifyContent="center"
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
                    >
                      <Text marginRight={10} marginTop={10} fontWeight="bold">
                        {user.userID}
                      </Text>
                      <Image
                        src={user.photo}
                        w="25%"
                        h={70}
                        borderRadius="50%"
                        marginTop={5}
                      />
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
