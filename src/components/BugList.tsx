import { createSlice } from "@reduxjs/toolkit";
import store from "./store";
import produce from "immer";

let lastId = 0;

interface Bug {
  id: number;
  description: string;
  resolved: boolean;
}
interface BugAddedPayload {
  description: string;
}

const slice = createSlice({
  name: "bugs",
  initialState: [] as Bug[],
  reducers: {
    bugAdded: (state, action: { type: string; payload: BugAddedPayload }) => {
      console.log(state);

      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    // bugRemoved: (state, action) => {
    //   const index = state.findIndex((bug) => bug.id === action.payload.id);
    //   if (index !== -1) {
    //     return produce(state, (draftState) => {
    //       draftState.splice(index, 1);
    //     });
    //   }
    //   return state;
    // },
    // bugResolved: (state, action) => {
    //   const index = state.findIndex((bug) => bug.id === action.payload.id);
    //   if (index !== -1) {
    //     return produce(state, (draftState) => {
    //       draftState[index].resolved = true;
    //     });
    //   }
    //   return state;
    // },
  },
});

export const { bugAdded } = slice.actions;

export default slice.reducer;
