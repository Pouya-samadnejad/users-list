import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const users = data.data.items;

const userSlice = createSlice({
  name: "user",
  initialState: users,
  reducers: {
    create: {
      prepare(firstName, lastName, nationalCode) {
        return {
          payload: {
            firstName,
            lastName,
            nationalCode,
          },
        };
      },
      reducer(state, action) {
      

        // Add new user with id 1 at the beginning
        state.unshift({
          id: state.length+ Math.round(Math.random(500)*500)+'',
          ...action.payload,
        });

        console.log(state);
        
      },
    },

    update(state, action) {
      const { id, firstName, lastName, nationalCode } = action.payload;

      const userToUpdate = state.find((u) => u.id === id);

      if (userToUpdate) {
        userToUpdate.firstName = firstName;
        userToUpdate.lastName = lastName;
        userToUpdate.nationalCode = nationalCode;
      }
    },
    deleteUser(state, action) {
      return state.filter((u) => u.id !== action.payload);
    },
  },
});

export const { create, update, deleteUser } = userSlice.actions;

export default userSlice.reducer;
