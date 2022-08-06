import { FC, useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  return { getUsers, users };
};
