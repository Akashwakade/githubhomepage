import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  strock1: false,
  strock2: false,
  strock3: false,
  strock4: false,
  strock5: false,
  strock6: false,
  strock7: false,
  strock8: false,
  strock9: false,
};
const AnimationStepSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Step1(state) {
      state.strock1 = true;
    },

    Step2(state) {
      state.strock2 = true;
    },
    Step3(state) {
      state.strock3 = true;
    },
    Step4(state) {
      state.strock4 = true;
    },
    Step5(state) {
      state.strock5 = true;
    },
    Step6(state) {
      state.strock6 = true;
    },
    Step7(state) {
      state.strock7 = true;
    },
    Step8(state) {
      state.strock8 = true;
    },
    Step9(state) {
      state.strock9 = true;
    },
    revertStep1(state) {
      state.strock1 = false;
    },
    revertStep2(state) {
      state.strock2 = false;
    },
    revertStep3(state) {
      state.strock3 = false;
    },
    revertStep4(state) {
      state.strock4 = false;
    },
    revertStep5(state) {
      state.strock5 = false;
    },
    revertStep6(state) {
      state.strock6 = false;
    },
    revertStep7(state) {
      state.strock7 = false;
    },
    revertStep8(state) {
      state.strock8 = false;
    },
    revertStep9(state) {
      state.strock9 = false;
    },
  },
});
export const {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  revertStep1,
  revertStep2,
  revertStep3,
  revertStep4,
  revertStep5,
  revertStep6,
  revertStep7,
  revertStep8,
  revertStep9,
} = AnimationStepSlice.actions;
export default AnimationStepSlice.reducer;
