import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const servicerequest = createSlice({
  name: "servicerequest",
  initialState,
  reducers: {
    addService(state, action) {
      return (state = [
        ...state,
        {
          id: nanoid(),
          money: action.payload.money,
          type: action.payload.type,
          naam: action.payload.naam,
        },
      ]);
    },

    removeService(state, action) {
      // return ()
    },
  },
});

export const serviceActions = servicerequest.actions;

export default servicerequest;
