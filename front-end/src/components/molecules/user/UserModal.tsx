import { memo, FC } from "react";
import {
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { User } from "../../../types/user";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
};
export const UserModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size="lg">
      <ModalOverlay>
        <ModalContent
          pb={4}
          bg="blackAlpha.700"
          color="#eee"
          borderRadius="lg"
          w="100%"
        >
          <ModalHeader textAlign="center" fontSize="xl">
            <Image
              src="/Pictures/hakone.png"
              borderRadius="100%"
              w="80px"
              h="80px"
              m="auto"
              marginTop="5"
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4} textAlign="center">
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>ID</FormLabel>
                <Input value="yuikuro" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>タイトル</FormLabel>
                <Input value="VALORANT" isReadOnly />
              </FormControl>
              <FormControl overflow="break-word">
                <FormLabel>コメント</FormLabel>
                <Textarea h={200} overflow="break-word">
                  アンレート @1 VC:discord アイアン〜シルバーくらいの方
                  初心者歓迎です！ 雑談しながら楽しくやりましょう #VALORANT募集
                </Textarea>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
