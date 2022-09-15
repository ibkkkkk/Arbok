import { memo, FC } from "react";
// import {
//   Box,
//   Drawer,
//   DrawerBody,
//   DrawerContent,
//   DrawerOverlay,
//   Image,
//   Text,
// } from "@chakra-ui/react";

// import { Users } from "../../../dummyData";

// type Props = {
//   onClose: () => void;
//   isOpen1: boolean;
// };

// export const FriendDrawer: FC<Props> = memo((props) => {
//   const { onClose, isOpen1 } = props;
//   return (
//     <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen1}>
//       <DrawerOverlay>
//         <DrawerContent>
//           <DrawerBody>
//             <Box marginTop={3}>
//               <Text textAlign="center" marginBottom={3}>
//                 オンラインの友達
//               </Text>

//               <Box>
//                 {Users.map((user) => (
//                   <Box
//                     display="flex"
//                     cursor="pointer"
//                     _hover={{
//                       transform: "scale(.95)",
//                       transition: "all .2s ease-out",
//                       border: "0px",
//                     }}
//                   >
//                     <Image
//                       src={user.photo}
//                       w="80px"
//                       h="80px"
//                       objectFit="cover"
//                       borderRadius="50%"
//                       marginTop={5}
//                       marginRight={10}
//                     />

//                     <Text
//                       marginTop={5}
//                       fontWeight="bold"
//                       display="flex"
//                       alignItems="center"
//                     >
//                       {user.userid}
//                     </Text>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//           </DrawerBody>
//         </DrawerContent>
//       </DrawerOverlay>
//     </Drawer>
//   );
// });
