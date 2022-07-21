import { memo, FC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
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
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size="md">
      <ModalOverlay>
        <ModalContent pb={6} bg="blackAlpha.700" color="#eee" borderRadius="lg">
          <ModalHeader textAlign="center" fontSize="xl">
            yuikuro
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>ID</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>タイトル</FormLabel>
                <Input value={user?.game} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>コメント</FormLabel>
                <Input value={user?.email} isReadOnly boxSize="sm" />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
