import privateAxios from "../base.Api";
import {
  API_JOB_APPLYJOB,
  API_JOB_DETAIL_BYID,
  API_JOB_GETJOBAPPLIEDCANDIDATES,
  API_JOB_GETJOBAPPLIEDCANDIDATES_BYID,
  API_JOB_GETLIVEJOB,
  API_JOB_GETNEWJOB,
  API_JOB_GETCANDIDATE_BYIDJOB,
  API_TYPEJOB_GETALL,
  API_LEVELJOB_GETALL,
  API_SALARY_GETALL,
  API_JOB_CREATE_BYID,
  API_JOB_EDIT_BYID,
  API_JOB_DELETE_BYID,
  API_JOB_GETJOBFORCOMPANY,
  API_JOB_PANIGATION,
  API_JOB_FIRSTPANIGATION,
  API_JOB_UPDATESTATUS_BYID

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
    const response = await privateAxios.get(
      `${API_JOB_GETJOBAPPLIEDCANDIDATES_BYID}/${id}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const postApplyJob = async (infor) => {
  try {
    const response = await privateAxios.post(`${API_JOB_APPLYJOB}`, infor);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getLevelJob = async () => {
  try {
    const response = await privateAxios.get(API_LEVELJOB_GETALL);
    return response.data;
  } catch (err) {
    throw err;
  }
};


// lấy các type jobs 
export const getTypeJobs = async () => {
  try {
    const response = await privateAxios.get(API_TYPEJOB_GETALL);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// lấy các leve job
export const getLevelJobs = async () => {
  try {
    const response = await privateAxios.get(API_LEVELJOB_GETALL);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// lấy các salary
export const getSalaries = async () => {
  try {
    const response = await privateAxios.get(API_SALARY_GETALL);
    return response.data;
  } catch (err) {
    throw err;
  }
}

//  thêm jobs mới của qua id của công ty
export const createJobs = async (id,data) => {
  try {
    const res = await privateAxios.post(`${API_JOB_CREATE_BYID}/${id}`, data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}



// sửa thông tin jobs
export const updateJobs = async (id,data) => {
  console.log(id,data)
  try {
    const res = await privateAxios.patch(`${API_JOB_EDIT_BYID}/${id}`, data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// xoá jobs
export const deleteJobs = async (id) => {
  try {
    const res = await privateAxios.delete(`${API_JOB_DELETE_BYID}/${id}`)
    return res.data
  } catch (error) {
    console.log(error) 
  }
}


// lấy tất cả công việc của công ty
export const getJobsForCompany = async (status) => {
  console.log(status)
  try {
    const res = await privateAxios.get(`${API_JOB_GETJOBFORCOMPANY}/?status=${status}`)
    return res.data 
  } catch (error) {
    console.log(error)
  }
}
//phan trang
export const firstPagination = async () => {
  try {
    const response = await privateAxios.get(API_JOB_FIRSTPANIGATION);
    return response.data;
  } catch (error) {
    return error;
  }
}

export const pagination = async (number) => {
    try {
      const response = await privateAxios.get(`${API_JOB_PANIGATION}?page=${number}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

// thay dổi trạng thái vcoong việc (bật tuyển dụng)

export const updateStatusOn = async (id) => {
  try {
    const res = await privateAxios.patch(`${API_JOB_UPDATESTATUS_BYID}/${id}?status=0`)
    return 
  } catch (error) {
    console.log(error)
  }
}

// thay đổi trạng thái công việc (dừng tuyển dụng)

export const updateStatusOff = async (id) => {
  try {
    const res = await privateAxios.patch(`${API_JOB_UPDATESTATUS_BYID}/${id}?status=1`)
    return 
  } catch (error) {
    console.log(error)
  }
}

// tìm các ứng viên đã ứng tuyển vào công việc này qua id jobs
export const findCandidates = async (id) => {
  try {
    const res = await privateAxios.get(`${API_JOB_GETCANDIDATE_BYIDJOB}/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// Coong ty gui mail tu choi phong van
export const CompanyCancelCandidates = async (id,data) => {
  console.log(id,data)
  try {
    
  } catch (error) {
    console.log(error)
  }
}
