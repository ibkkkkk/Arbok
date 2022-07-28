import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  onOpen: () => void;
};

export const ArrowButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      onClick={onOpen}
      aria-label="ArrowButton"
      icon={<ArrowForwardIcon />}
      size="sm"
      variant="fulfilled"
      color="white"
      marginRight={1}
    />
  );
});
