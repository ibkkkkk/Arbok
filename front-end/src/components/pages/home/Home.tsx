import { Wrap, WrapItem, Box } from "@chakra-ui/react";

import { UserCard } from "../../molecules/user/UserCard";
import { Header } from "../../organisms/layout/Header";
import { useUsers } from "../../../customHooks/useUsers";
import { useEffect } from "react";

export const Home = () => {
  const { getUsers, users } = useUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      <Header />
      <Box display="flex">
        <Box flex="8">
          {
            <Wrap p={{ base: 5, md: 9 }}>
              {users.map((user) => (
                <WrapItem key={user.id} mx="auto">
                  <UserCard
                    id={user.id}
                    imgUrl="https://source.unsplash.com/random"
                    userName={user.name}
                  />
                </WrapItem>
              ))}
            </Wrap>
          }
        </Box>
        <Box flex="3">
          <p>fvfvvvvvv</p>
        </Box>
      </Box>
    </>
  );
};
