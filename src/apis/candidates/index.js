import privateAxios from "../base.Api";
import { API_CANDIDATE_GETALL, API_CANDIDATE_GETALLINFORMATION } from "../patchApi";

export const candidateGetAll = async () => {
  try {
    const response = await privateAxios.get(API_CANDIDATE_GETALL);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateGetAllInformation = async () => {
  try {
    const response = await privateAxios.get(API_CANDIDATE_GETALLINFORMATION);
    return response.data;
  } catch (err) {
    throw err;
  }
};


