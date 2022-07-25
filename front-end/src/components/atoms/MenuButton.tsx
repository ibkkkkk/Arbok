import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      onClick={onOpen}
      aria-label="menuButton"
      icon={<HamburgerIcon />}
      size="sm"
      variant="fulfilled"
      color="white"
      paddingLeft={2}
    />
  );
});
