// import { FC, useCallback, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../state/AuthContext";

// export const useUsers = () => {
//   const { user } = useContext(AuthContext);
//   const [posts, setPosts] = useState();

//   const getPosts = useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await axios.get(`/posts/timeline/${user._id}`);
//       console.log(response.data);
//       setPosts(response.data);
//     };
//     fetchPosts();
//   }, [user._id]);
//   return { posts, getPosts };
// };
