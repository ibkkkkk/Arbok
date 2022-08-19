import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

// 最初のユーザー状態を定義
const initialState = {
  // user: null,
  user: {
    _id: "62eff5f24f62912f36166ae3",
    username: "sample君",
    email: "sample.com",
    password: "12345",
    profilePicture: "/Pictures/comme.png",
    coverPicture: "true",
    followings: [],
    followers: [],
    isAdmin: "false",
  },
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
