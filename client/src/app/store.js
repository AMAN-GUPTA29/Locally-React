import { configureStore } from "@reduxjs/toolkit";
import servicerequest from "../features/servicerequest/servicerequestSlice";

export const store = configureStore({
  reducer: { servicerequest: servicerequest.reducer },
});
