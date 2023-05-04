import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

let lastId = 0;

interface Bug {
  id: number;
  description: string;
  resolved: boolean;
}
interface BugAddedPayload {
  description: string;
}
const initialState: Bug[] = [];

const slice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    bugAdded: (state, action: { type: string; payload: BugAddedPayload }) => {
      console.log("State ", state);
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) {
        state[index].resolved = true;
      }
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;

export default slice.reducer;
