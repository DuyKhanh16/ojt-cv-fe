import privateAxios from "../base.Api";
import {
  API_JOB_DETAIL_BYID,
  API_JOB_GETJOBAPPLIEDCANDIDATES,
  API_JOB_GETJOBAPPLIEDCANDIDATES_BYID,
  API_JOB_GETLIVEJOB,
  API_JOB_GETNEWJOB,
} from "../patchApi";

export const jobGetNewJobs = async () => {
  try {
    const response = await privateAxios.get(API_JOB_GETNEWJOB);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const jobGetLiveJobs = async () => {
  try {
    const response = await privateAxios.get(API_JOB_GETLIVEJOB);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllJobApply = async () => {
  try {
    const response = await privateAxios.get(API_JOB_GETJOBAPPLIEDCANDIDATES);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getJobDetail = async (id) => {
  try {
    const response = await privateAxios.get(`${API_JOB_DETAIL_BYID}/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getJobAppliedCandidatesbyId = async (id) => {
  try {
    const response = await privateAxios.get(`${API_JOB_GETJOBAPPLIEDCANDIDATES_BYID}/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
