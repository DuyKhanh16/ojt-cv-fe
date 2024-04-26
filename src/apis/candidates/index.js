import privateAxios from "../base.Api";
import { API_CANDIDATE_CREATECERTIFICATE, API_CANDIDATE_CREATEDUCATION, API_CANDIDATE_CREATEEXPERIENCE, API_CANDIDATE_CREATEPROJECT, API_CANDIDATE_CREATESKILL, API_CANDIDATE_GETALL, API_CANDIDATE_GETALLINFORMATION, API_CANDIDATE_GETINFOR, API_CANDIDATE_UPDATECERTIFICATE_BYID, API_CANDIDATE_UPDATEEDUCATION_BYID, API_CANDIDATE_UPDATEEXPERIENCE_BYID, API_CANDIDATE_UPDATEINFORCANDIDATE, API_CANDIDATE_UPDATEPROJECT_BYID, API_CANDIDATE_UPDATESKILL_BYID } from "../patchApi";

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

export const candidateGetInfor = async () => {
  try {
    const response = await privateAxios.get(API_CANDIDATE_GETINFOR);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateAboutMe = async (aboutUser) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATEABOUTME}`,aboutUser);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateInfoCandidate = async (userUpdate) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATEINFORCANDIDATE}`,userUpdate);
    return response.data;
  } catch (err) {
    throw err;
  }
};



export const candidateUpdateCertificate = async (id,user) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATECERTIFICATE_BYID}/${id}`,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateCreateCertificate = async (user) => {
  try {
    const response = await privateAxios.post(API_CANDIDATE_CREATECERTIFICATE,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateUpdateEducation = async (id,user) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATEEDUCATION_BYID}/${id}`,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateCreateEducation = async (user) => {
  try {
    const response = await privateAxios.post(API_CANDIDATE_CREATEDUCATION,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateUpdateExperience = async (id,user) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATEEXPERIENCE_BYID}/${id}`,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateCreateExperience = async (user) => {
  try {
    const response = await privateAxios.post(API_CANDIDATE_CREATEEXPERIENCE,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateUpdateProject = async (id,user) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATEPROJECT_BYID}/${id}`,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateCreateProject = async (user) => {
  try {
    const response = await privateAxios.post(API_CANDIDATE_CREATEPROJECT,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateUpdateSkill = async (id,user) => {
  try {
    const response = await privateAxios.patch(`${API_CANDIDATE_UPDATESKILL_BYID}/${id}`,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const candidateCreateSkill = async (user) => {
  try {
    const response = await privateAxios.post(API_CANDIDATE_CREATESKILL,user);
    return response.data;
  } catch (err) {
    throw err;
  }
};




