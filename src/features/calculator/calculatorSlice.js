import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  result: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    Element: (state, action) => {
      var element = action.payload;
      var lastElement = state.array[state.array.length - 1];
      var lastBefore = state.array[state.array.length - 2];
      switch (element) {
        case "+":
        case "/":
        case "*":
          //adds result in the front if the first element is an operator
          if (state.array.length === 0) {
            state.array.push(state.result.toString());
          }
          // Checks if it is the second operator
          if (
            (lastElement === "+") |
            (lastElement === "-") |
            (lastElement === "/") |
            (lastElement === "*")
          ) {
            state.array.pop();
            if (
              (lastBefore === "+") |
              (lastBefore === "-") |
              (lastBefore === "/") |
              (lastBefore === "*")
            ) {
              state.array.pop();
            }
          }
          state.array.push(element);
          break;
        case "-":
          //adds result in the front if the first element is an operator
          if (state.array.length === 0) {
            state.array.push(state.result.toString());
          }
          // removes the last before element and changes last minus from negative number to operator
          if (state.array[state.array.length - 1] === "-") {
            if (
              (lastBefore === "+") |
              (lastBefore === "-") |
              (lastBefore === "/") |
              (lastBefore === "*")
            ) {
              state.array.splice(state.array.length - 2, 1);
            }
          }
          state.array.push(element);
          break;
        case ".":
          // checks if it is the first value
          if (
            (lastElement === "+") |
            (lastElement === "-") |
            (lastElement === "/") |
            (lastElement === "*") |
            (state.array.length === 0)
          ) {
            element = "0.";
          } else {
            // checks if it is second decimal
            if (lastElement.includes(".")) break;
            // combain it to make it a single string
            element = state.array[state.array.length - 1].concat(element);
            state.array.pop();
          }
          state.array.push(element);
          break;
        default:
          //removes useless zeros
          if (lastElement === "0") {
            state.array.pop();
            lastElement = state.array[state.array.length - 1];
            lastBefore = state.array[state.array.length - 2];
          }
          //makes numbers as a single string
          if (
            !isNaN(lastElement) | (lastElement === "-" && isNaN(lastBefore))
          ) {
            element = state.array[state.array.length - 1].concat(element);
            state.array.pop();
          }
          state.array.push(element);
          break;
      }
    },
    Clear: (state) => {
      // clears all values from the state
      state.array = [];
      state.result = 0;
    },
    Ce: (state) => {
      //clears last element
      if (isNaN(state.array[state.array.length - 1])) {
        state.array.pop();
      } else {
        let temp = state.array[state.array.length - 1];
        state.array.pop();
        if (temp.length > 1) {
          state.array.push(temp.slice(0, -1));
        }
      }
    },
    Equal: (state) => {
      //removes useless operators in back
      if (isNaN(state.array[state.array.length - 1])) state.array.pop();
      //calculates value and set array to empty
      if (state.array.length !== 0) {
        let calculate = state.array.join("");
        state.result = eval(calculate);
        state.array = [];
      }
    },
  },
});

export const { Element, Clear, Equal, Ce } = calculatorSlice.actions;

export default calculatorSlice.reducer;
