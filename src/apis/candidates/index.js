import privateAxios from "../base.Api";
import { API_CANDIDATE_GETALL } from "../patchApi";

export const candidateGetAll = async (
  ) => {
    try {
      const response = await privateAxios.get(API_CANDIDATE_GETALL);
      return response;
    } catch (err) {
      throw err;
    }
  };