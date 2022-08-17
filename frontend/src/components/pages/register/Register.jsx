import {
  Box,
  Button,
  FormControl,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const { password } = useRef();
  const { passwordConfirmation } = useRef();

  const onSubmit = async (data) => {
    // パスワードと確認用を一致させる
    if (data.password.value !== data.passwordConfirmation.value) {
      data.passwordConfirmation.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          username: data.username.value,
          email: data.email.value,
          password: data.password.value,
        };
        await axios.post("/auth/register", user);
        // register API を叩く
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
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
                    新規登録
                  </Text>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                      <Input
                        type="text"
                        marginBottom={4}
                        placeholder="username"
                        {...register("username", {
                          required: "This is required",
                        })}
                      />
                      <Input
                        type="email"
                        marginBottom={4}
                        placeholder="email"
                        {...register("email", {
                          required: "This is required",
                        })}
                      />
                      <Input
                        type="password"
                        marginBottom={4}
                        placeholder="password"
                        ref={password}
                        {...register("password", {
                          required: "This is required",
                          minLength: {
                            value: 5,
                            message: "Minimum length should be 5",
                          },
                        })}
                      />
                      <Input
                        type="password"
                        marginBottom={4}
                        placeholder="Confirm password"
                        ref={passwordConfirmation}
                        {...register("passwordConfirmation", {
                          required: "This is required",
                          minLength: {
                            value: 5,
                            message: "Minimum length should be 5",
                          },
                        })}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      size="md"
                      bg="blue.200"
                      fontWeight="bold"
                      color="gray.700"
                      w="100%"
                      alignSelf="center"
                    >
                      アカウント作成
                    </Button>
                  </form>
                  <Button
                    size="sm"
                    bg="blue.200"
                    w="60%"
                    alignSelf="center"
                    fontSize="xs"
                  >
                    ログイン
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
