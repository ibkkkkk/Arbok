import { memo, FC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const HeaderDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickRegister = () => {
    navigate("/register");
  };

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button w="100%" onClick={onClickLogin}>
              ログイン
            </Button>
            <Button w="100%" onClick={onClickRegister}>
              新規登録
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
