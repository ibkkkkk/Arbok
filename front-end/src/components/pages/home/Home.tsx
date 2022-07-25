import { Box, Text, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";

import { Header } from "../../organisms/layout/Header";
import { PostForm } from "../../molecules/user/PostForm";
import { UserModal } from "../../molecules/user/UserModal";
import { useSelected } from "../../../customHooks/useSelected";
import { UserCard } from "../../molecules/user/UserCard";
import { useUsers } from "../../../customHooks/useUsers";
// import { Ibkkk } from "../../../Ibkkk";
// import { Users } from "../../../dummyData";

export const Home: FC = memo((user) => {
  const { getUsers, users } = useUsers();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { selectUser, onSelectUser } = useSelected();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users]
  );

  return (
    <>
      <Header />
      <Box w="100%">
        <Box h={285} boxShadow="4px 2px 15px -9px #65789f" m={3}>
          <PostForm />
        </Box>

        <Box w="100%">
          <Box>
            <Text align="center" fontWeight="bold" marginBottom={3}>
              募集一覧
            </Text>
            {
              <Wrap p={{ base: 4, md: 7 }} spacingX={4}>
                {users.map((user) => (
                  <WrapItem key={user.id} mx="auto">
                    <UserCard
                      id={user.id}
                      imgUrl="https://source.unsplash.com/random"
                      userName={user.name}
                      onClick={onClickUser}
                    />
                  </WrapItem>
                ))}
              </Wrap>
            }
          </Box>
        </Box>
      </Box>
      <UserModal isOpen={isOpen} onClose={onClose} user={selectUser} />
    </>
  );
});
