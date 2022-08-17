import {
  Box,
  Button,
  FormControl,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginCall } from "../../../actionCalls";
import { AuthContext } from "../../../state/AuthContext";

// type Props = {
//   email: string;
//   password: string;
// };

export const Login = () => {
  // const email = useRef();
  // const { handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   data.preventDefault();
  //   console.log(email.current);
  // };

  const { register, handleSubmit } = useForm();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const onSubmit = (data) => {
    loginCall(
      {
        email: data.email,
        password: data.password,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <Box>
      <Box
        w="100v2"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
      >
        <Box w="70%" h="70%" display="flex">
          <Box
            flex="4"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontSize="14" fontWeight="bold">
              FPS専門募集&交流アプリ
            </Text>
            <Text fontSize="40" fontWeight="bold" color="blue.400">
              Sample
            </Text>
          </Box>
          <Box
            flex="8"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              h="75%"
              w="90%"
              borderRadius="10"
              bg="white"
              p="10"
              shadow="md"
            >
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={3}
                align="stretch"
              >
                <Text textAlign="center" fontWeight="bold">
                  ログイン
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl>
                    <Input
                      marginBottom={5}
                      type="email"
                      placeholder="email"
                      {...register("email", {
                        required: "This is required",
                      })}
                    />
                    <Input
                      marginBottom={5}
                      type="password"
                      placeholder="password"
                      {...register("password", {
                        required: "This is required",
                        minLength: {
                          value: 5,
                          message: "Minimum length should be 5",
                        },
                      })}
                    />
                  </FormControl>
                  <Button
                    size="md"
                    bg="blue.200"
                    fontWeight="bold"
                    color="gray.700"
                    w="100%"
                    alignSelf="center"
                    type="submit"
                  >
                    ログイン
                  </Button>
                </form>
                <Text textAlign="center" marginTop="5">
                  パスワードを忘れた方
                </Text>
                <Button
                  size="sm"
                  bg="blue.200"
                  w="60%"
                  alignSelf="center"
                  fontSize="xs"
                >
                  アカウント作成
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
