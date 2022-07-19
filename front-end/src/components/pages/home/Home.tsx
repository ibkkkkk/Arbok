import { Wrap, WrapItem, Box } from "@chakra-ui/react";

import { UserCard } from "../../molecules/user/UserCard";
import { Header } from "../../organisms/layout/Header";
import { useUsers } from "../../../customHooks/useUsers";
import { useEffect } from "react";
import { PostForm } from "../../organisms/layout/PostForm";

export const Home = () => {
  const { users, getUsers } = useUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      <Header />
      <Box h={300} boxShadow="4px 2px 15px -9px #65789f" m={3}>
        <PostForm />
      </Box>
      <Box display="flex">
        <Box flex="6.5">
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
        <Box flex="0.5"></Box>
      </Box>
    </>
  );
};
