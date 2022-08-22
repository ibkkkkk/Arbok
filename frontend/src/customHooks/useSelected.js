import { useCallback, useState } from "react";

// import { User } from "../types/user";

// type Props = {
//   id: number;
//   users: Array<User>;
//   onOpen: () => void;
// };

export const useSelected = () => {
  const [selectUser, setSelectUser] = useState(null);

  const onSelectUser = useCallback((props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectUser(targetUser);
    onOpen();
  }, []);
  return { onSelectUser, selectUser };
};
