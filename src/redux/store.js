// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./reduce/candidateReduce";
import educationReducer from "./reduce/educationReduce";
import expReducer from "./reduce/expReduce";
import projectReducer from "./reduce/projectReduce";
import certificateReducer from "./reduce/certificateReduce";
import inforCompanyReducer from "./reduce/getInforCompany";
import skillReducer from "./reduce/skillReduce";
export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    education: educationReducer,
    exp: expReducer,
    project: projectReducer,
    certificate: certificateReducer,
    inforCompany: inforCompanyReducer,
    skill: skillReducer,
  },
});
