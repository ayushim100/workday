import { SET_FIRST_NAME, SET_LAST_NAME } from "../types";
// export const updateFirstName = (firstName) => (dispatch, getState) => {
//   try {
//     console.log(firstName, getState());
//     dispatch({
//       type: SET_FIRST_NAME,
//       payload: {
//         firstName,
//         message: `Update Firstname ${
//           getState().nameReducer.firstName
//         } to ${firstName} `,
//       },
//     });
//   } catch (error) {
//     console.log("Error", error);
//   }
// };