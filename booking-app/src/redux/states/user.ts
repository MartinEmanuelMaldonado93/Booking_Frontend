import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "src/models";

export const EmptyUserState: UserInfo = {
  email: "",
  isAdmin: false,
  password: "",
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState,
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
