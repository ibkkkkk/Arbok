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
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const username = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const email = useRef();

  const onClickLoginButton = () => {
    navigate("/login");
  };
  const navigate = useNavigate();
  // const { register, getValues, trigger } = useForm({
  //   mode: "onBlur",
  //   criteriaMode: "all",
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワードが違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        await axios.post("/auth/register", user);
        navigate("/login");
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
                h="77%"
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
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl>
                      <Input
                        ref={username}
                        id="field1"
                        type="text"
                        marginBottom={4}
                        placeholder="username"
                      />
                      <Input
                        ref={email}
                        id="field2"
                        type="email"
                        marginBottom={4}
                        placeholder="email"
                      />
                      <Input
                        ref={password}
                        id="field3"
                        type="password"
                        marginBottom={4}
                        placeholder="password"
                        // {...register("password", {
                        //   required: "This is required",
                        //   minLength: {
                        //     value: 5,
                        //   },
                        //   onBlur: () => {
                        //     if (getValues("passwordConfirmation")) {
                        //       trigger("passwordConfirmation");
                        //     }
                        //   },
                        // })}
                      />
                      <Input
                        ref={passwordConfirmation}
                        id="field4"
                        type="password"
                        marginBottom={4}
                        placeholder="Confirm password"
                        // {...register("passwordConfirmation", {
                        //   required: "This is required",
                        //   minLength: {
                        //     value: 5,
                        //   },
                        //   validate: (value) => {
                        //     return (
                        //       value === getValues("password") ||
                        //       console.log("need password")
                        //     );
                        //   },
                        // })}
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
                  <Text fontSize="sm" fontWeight="bold" textAlign="center">
                    <span
                      style={{
                        color: "lightBlue",
                        cursor: "pointer",
                      }}
                      onClick={onClickLoginButton}
                    >
                      ログイン
                    </span>
                    はこちら
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
